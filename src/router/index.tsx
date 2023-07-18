import Cookies from 'js-cookie';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Login } from '../pages/Login';
import { Transactions } from '../pages/Transactions';
import { PrivateRoute } from './privateRoute';

export const Router: React.FC = () => {
  const token = Cookies.get('_facilite_accessToken');

  return (
    <Routes>
      <Route path="/login" element={token ? <Navigate to="/transactions" replace /> : <Login />} />
      <Route
        path="/transactions"
        element={
          <PrivateRoute>
            <Transactions />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};
