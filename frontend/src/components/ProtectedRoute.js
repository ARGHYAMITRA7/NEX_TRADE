import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getStoredAuth } from '../auth';

const ProtectedRoute = ({ children }) => {
  const [ready, setReady] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = getStoredAuth();
    setIsAuthenticated(Boolean(auth.token));
    setReady(true);
  }, []);

  if (!ready) {
    return <div style={{ padding: '2rem' }}>Checking session...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
