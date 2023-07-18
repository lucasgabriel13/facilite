import { zodResolver } from '@hookform/resolvers/zod';
import { MagnifyingGlass } from 'phosphor-react';
import React from 'react';
import { useForm } from 'react-hook-form';

import { Loading } from '../../../../components/Loading';
import { useTransaction } from '../../../../context/TransactionsContext';
import { SearchFormSchemaType, searchFormSchema } from './schema';
import { SearchFormContainer } from './styles';

export const SearchForm: React.FC = () => {
  const { fetchTransactions } = useTransaction();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormSchemaType>({
    resolver: zodResolver(searchFormSchema),
  });

  const handleSearchTransactions = async (data: SearchFormSchemaType) => {
    await fetchTransactions(data.query);
  };

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input type="text" placeholder="Busque por transações" {...register('query')} />
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            Buscando
            <Loading size={12} />
          </>
        ) : (
          <>
            <MagnifyingGlass size={20} />
            Buscar
          </>
        )}
      </button>
    </SearchFormContainer>
  );
};
