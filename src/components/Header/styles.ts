import styled, { keyframes } from 'styled-components';

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const HeaderContainer = styled.header`
  background: ${({ theme }) => theme['gray-900']};
  padding: 2.5rem 0 7.25rem;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NewTransactionButton = styled.button`
  height: 50px;
  border: 0;
  background: ${({ theme }) => theme['green-500']};
  color: ${({ theme }) => theme.white};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme['green-700']};
    transition: background-color 0.3s;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 0 0.5rem;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

export const Profile = styled.button`
  border: 2px solid ${({ theme }) => theme['green-500']};
  box-shadow: 0px 0px 4px 1px rgba(0, 135, 95, 1);
  background: transparent;

  width: 50px;
  height: 50px;

  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  z-index: 10;

  img {
    width: 100%;
    border-radius: 50%;
  }
`;

export const ProfileContent = styled.div`
  width: 150px;
  height: 100%;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 0.5rem;

  z-index: 5;

  animation: ${slideDown} 0.5s ease-in-out;
`;

export const ButtonSingOut = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  margin-top: 0.5rem;

  font-size: 1rem;
  font-weight: bold;

  border: 0;
  background-color: transparent;
  cursor: pointer;

  color: ${({ theme }) => theme['gray-100']};

  &:hover {
    color: ${({ theme }) => theme['red-300']};
    transition: color 0.3s;
  }
`;
