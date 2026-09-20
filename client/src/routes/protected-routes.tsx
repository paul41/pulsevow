import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import type { JSX } from 'react';

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const {token} = useAuth();
  return token ? children : <Navigate to="/login" replace />;
};
