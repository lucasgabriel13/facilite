import { collection, doc, setDoc, where, query, getDocs } from 'firebase/firestore';
import { ReactNode, createContext, useCallback, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { db } from '../services/firebase';

export interface Transaction {
  id: string;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  user?: string;
  category: string;
  createdAt: string;
}

interface NewTransactionInputType {
  description: string;
  category: string;
  price: number;
  type: 'income' | 'outcome';
}

interface TransactionContextType {
  isLoading: boolean;
  transactions: Transaction[];
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction: (data: NewTransactionInputType) => void;
}

interface TransactionProviderProps {
  children: ReactNode;
}

const TransactionContext = createContext({} as TransactionContextType);

const TransactionProvider = ({ children }: TransactionProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTransactions = useCallback(async () => {
    setIsLoading(true);
    console.log('parei aqui');

    const userStorage = localStorage.getItem('@facilite:user');

    if (!userStorage) {
      return;
    }

    const user = JSON.parse(userStorage);

    const transactions: Transaction[] = [];

    const transactionCollection = await collection(db, 'transactions');
    const transactionQuery = await query(
      transactionCollection,
      where('transaction.user', '==', user.email),
    );
    const data = await getDocs(transactionQuery);
    data.forEach(doc => {
      const transaction = doc.data().transaction as Transaction;
      transactions.push(transaction);
    });

    setTransactions(transactions);
    setIsLoading(false);
  }, []);

  const createTransaction = useCallback(async (data: NewTransactionInputType) => {
    const { description, category, price, type } = data;
    const userStorage = localStorage.getItem('@facilite:user');

    if (!userStorage) {
      return;
    }
    const user = JSON.parse(userStorage);

    const transaction: Transaction = {
      id: uuidv4(),
      user: user?.email,
      type,
      description,
      category,
      price,
      createdAt: new Date().toISOString(),
    };

    await setDoc(doc(db, 'transactions', transaction.id), {
      transaction,
    });

    setTransactions(prevState => [...prevState, transaction]);
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        isLoading,
        fetchTransactions,
        createTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

const useTransaction = () => {
  const context = useContext(TransactionContext);
  return context;
};

export { TransactionProvider, useTransaction };
