import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getStoredAuth, clearAuth } from '../auth';

const AuthCheck = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const auth = getStoredAuth();
      const token = auth.token;
      
      if (!token) {
        clearAuth();
        window.location.assign(`${process.env.REACT_APP_FRONTEND_URL || 'http://localhost:3000'}/login`);
        return;
      }

      try {
        const response = await axios.get('http://localhost:3002/api/auth/verify', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (response.data.valid) {
          setIsAuthenticated(true);
        } else {
          clearAuth();
          window.location.assign(`${process.env.REACT_APP_FRONTEND_URL || 'http://localhost:3000'}/login`);
        }
      } catch (error) {
        clearAuth();
        window.location.assign(`${process.env.REACT_APP_FRONTEND_URL || 'http://localhost:3000'}/login`);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [navigate]);

  if (isLoading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '18px'
      }}>
        Loading...
      </div>
    );
  }

  return isAuthenticated ? children : null;
};

export default AuthCheck;