import React, { useEffect } from 'react';

import { Header } from '../../components/Header';
import { Loading } from '../../components/Loading';
import { Summary } from '../../components/Summary';
import { useTransaction } from '../../context/TransactionsContext';
import { Transform } from '../../utils/transform';
import { SearchForm } from './components/SearchForm';
import {
  LoadingContainer,
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles';

export const Transactions: React.FC = () => {
  const { isLoading, transactions, fetchTransactions } = useTransaction();

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        {isLoading ? (
          <LoadingContainer>
            <Loading />
          </LoadingContainer>
        ) : (
          <TransactionsTable>
            <tbody>
              {transactions.map(transaction => {
                const price = Transform.formatCurrency(transaction.price);
                const date = Transform.localeDate(transaction.createdAt);

                return (
                  <tr key={transaction.id}>
                    <td width="50%">{transaction.description}</td>
                    <td>
                      <PriceHighlight variant={transaction.type}>
                        {transaction.type === 'outcome' && '- '}
                        {price}
                      </PriceHighlight>
                    </td>
                    <td>{transaction.category}</td>
                    <td>{date}</td>
                  </tr>
                );
              })}
            </tbody>
          </TransactionsTable>
        )}
      </TransactionsContainer>
    </div>
  );
};
