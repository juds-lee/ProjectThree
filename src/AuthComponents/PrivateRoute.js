import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../contexts/AuthContexts';

const ProtectedRoute = ({ children }) => {
  const { user } = UserAuth();

  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;