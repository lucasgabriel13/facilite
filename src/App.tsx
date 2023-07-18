import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { TransactionProvider } from './context/TransactionsContext';
import { UserProvider } from './context/UserContext';
import { Router } from './router';
import { GlobalTheme } from './styles/global';
import { defaultTheme } from './styles/theme/default';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <UserProvider>
          <TransactionProvider>
            <Router />
          </TransactionProvider>
        </UserProvider>
      </BrowserRouter>
      <GlobalTheme />
    </ThemeProvider>
  );
}
