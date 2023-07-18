import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';
import React, { useMemo } from 'react';

import { useTransaction } from '../../context/TransactionsContext';
import { Transform } from '../../utils/transform';
import { Loading } from '../Loading';
import { SummaryCard, SummaryContainer } from './styles';

export const Summary: React.FC = () => {
  const { isLoading, transactions } = useTransaction();

  const summary = useMemo(() => {
    return transactions.reduce(
      (acc, transaction) => {
        if (transaction.type === 'income') {
          acc.income += transaction.price;
          acc.total += transaction.price;
        } else {
          acc.outcome += transaction.price;
          acc.total -= transaction.price;
        }

        return acc;
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
      },
    );
  }, [transactions]);

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>
          {isLoading ? <Loading size={20} /> : Transform.formatCurrency(summary.income)}
        </strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong>
          {isLoading ? <Loading size={20} /> : Transform.formatCurrency(summary.outcome)}
        </strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#ffffff" />
        </header>
        <strong>
          {isLoading ? (
            <Loading size={20} color="white" />
          ) : (
            Transform.formatCurrency(summary.total)
          )}
        </strong>
      </SummaryCard>
    </SummaryContainer>
  );
};
