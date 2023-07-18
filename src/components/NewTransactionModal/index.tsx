import { zodResolver } from '@hookform/resolvers/zod';
import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import { useTransaction } from '../../context/TransactionsContext';
import { NewTransactionFormType, newTransactionFormSchema } from './schema';
import {
  CloseButton,
  DialogContent,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from './styles';

export const NewTransactionModal: React.FC = () => {
  const { createTransaction } = useTransaction();

  const {
    register,
    control,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<NewTransactionFormType>({
    defaultValues: {
      type: 'income',
    },
    resolver: zodResolver(newTransactionFormSchema),
  });

  const handleCreateNewTransaction = async (data: NewTransactionFormType) => {
    createTransaction(data);
    reset();
  };

  return (
    <Dialog.Portal>
      <Overlay />
      <DialogContent>
        <Dialog.Title>Nova transação</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>
        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input type="text" placeholder="Descrição" required {...register('description')} />
          <input
            type="number"
            placeholder="Preço"
            required
            {...register('price', { valueAsNumber: true })}
          />
          <input type="text" placeholder="Categoria" required {...register('category')} />

          <Controller
            name="type"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TransactionType
                onValueChange={(value: 'income' | 'outcome') => onChange(value)}
                value={value}
              >
                <TransactionTypeButton variant="income" value="income">
                  <ArrowCircleUp size={24} />
                  Entrada
                </TransactionTypeButton>
                <TransactionTypeButton variant="outcome" value="outcome">
                  <ArrowCircleDown size={24} />
                  Saída
                </TransactionTypeButton>
              </TransactionType>
            )}
          />

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Cadastrando ...' : 'Cadastrar'}
          </button>
        </form>
      </DialogContent>
    </Dialog.Portal>
  );
};
