import Cookies from 'js-cookie';
import React from 'react';
import { Navigate } from 'react-router-dom';

export const PrivateRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const token = Cookies.get('_facilite_accessToken');

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
