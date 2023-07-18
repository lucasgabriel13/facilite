import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
`;

export const ContentLeft = styled.div`
  width: 45%;
  height: 100vh;
  background: ${({ theme }) => theme['gray-700']};
  padding: 5rem;
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  h2 {
    font-size: 1rem;
    font-weight: 400;
  }
`;

export const IllustrationWrapper = styled.div`
  margin-top: 7.75rem;

  img {
    width: 100%;
  }
`;

export const ContentRight = styled.div`
  width: 55%;
  height: 100vh;
  background: ${({ theme }) => theme['gray-800']};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 3.25rem;
`;

export const Title = styled.h1`
  font-size: 2.25rem;
  color: ${({ theme }) => theme['gray-100']};

  strong {
    color: ${({ theme }) => theme['green-500']};
  }
`;

export const HeadingSignIn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  p {
    line-height: 1.5rem;
  }
`;

export const ButtonSignIn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  border: 0;
  border-radius: 4px;

  width: 332px;
  height: 48px;
  cursor: pointer;

  color: ${({ theme }) => theme['gray-100']};
  background: ${({ theme }) => theme['green-500']};

  &:hover {
    background: ${({ theme }) => theme['green-700']};
    transition: background 0.3s;
  }
`;
