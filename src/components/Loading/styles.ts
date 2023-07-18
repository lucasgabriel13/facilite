import styled, { css, keyframes } from 'styled-components';

interface LoadingStyleProps {
  size: number;
  color: string;
}

const rotateAnimation = keyframes`
  0%{
    transform: rotate(0deg);
  }

  100%{
    transform: rotate(360deg);
  }
`;

export const LoadingContainer = styled.div<LoadingStyleProps>`
  ${({ size, color }) => css`
    border: 2px solid rgba(1, 95, 67, 0.1);
    border-top-color: ${color};
    width: ${size}px;
    height: ${size}px;
  `}
  border-radius: 50%;
  animation: ${rotateAnimation} 2s infinite ease-in-out;
`;
