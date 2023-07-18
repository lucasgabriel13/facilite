import { createGlobalStyle } from 'styled-components';

export const GlobalTheme = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
      outline: 0;
      box-shadow: 0 0 0 2xp ${({ theme }) => theme['gray-500']};
    }

    body {
      background-color: ${({ theme }) => theme['gray-800']};
      color: ${({ theme }) => theme['gray-100']};
      -webkit-font-smoothing: antialiased;
    }

    body, input-security, textarea, button {
      font: 400 1rem Roboto, sans-serif;
    }
`;
