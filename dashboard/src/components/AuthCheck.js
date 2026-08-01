import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AuthCheck = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      
      if (!token) {
        // No token found, redirect to login
        window.location.href = 'http://localhost:3001/login';
        return;
      }

      try {
        // Verify token with backend
        const response = await axios.get('http://localhost:3002/api/auth/verify', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (response.data.valid) {
          setIsAuthenticated(true);
        } else {
          // Invalid token, redirect to login
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          window.location.href = 'http://localhost:3001/login';
        }
      } catch (error) {
        // Error verifying token, redirect to login
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = 'http://localhost:3001/login';
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

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