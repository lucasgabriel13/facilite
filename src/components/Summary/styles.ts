import styled, { css } from 'styled-components';

interface SummaryCardStyleProps {
  variant?: 'green';
}

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;

  @media (max-width: 998px) {
    overflow-x: scroll;
  }
`;

export const SummaryCard = styled.div<SummaryCardStyleProps>`
  background: ${({ theme }) => theme['gray-600']};
  border-radius: 6px;
  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({ theme }) => theme['gray-300']};
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }

  ${({ variant, theme }) =>
    variant === 'green' &&
    css`
      background: ${theme['green-700']};
    `}
`;
