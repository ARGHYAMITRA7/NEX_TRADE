import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';

// Landing Page Components
import HomePage from './components/landing_page/home/HomePage';
import Signup from './components/landing_page/signup/Signup';
import Login from './components/landing_page/login/Login';
import AboutPage from './components/landing_page/about/AboutPage';
import ProductsPage from './components/landing_page/products/ProductsPage';
import PricingPage from './components/landing_page/pricing/PricingPage';
import SupportPage from './components/landing_page/support/SupportPage';
import NotFound from './components/landing_page/NotFound';
import Navbar from './components/landing_page/Navbar';
import Footer from './components/landing_page/Footer';

// Dashboard Components
import Dashboard from './components/dashboard/Dashboard';
import TopBar from './components/dashboard/TopBar';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        setIsLoading(false);
        return;
      }

      try {
        const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3002';
        const response = await axios.get(`${backendUrl}/api/auth/verify`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (response.data.valid) {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
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

  return isAuthenticated ? children : <Navigate to="/login" />;
};

// Layout Components
const LandingLayout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

const DashboardLayout = ({ children }) => (
  <>
    <TopBar />
    {children}
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page Routes */}
        <Route path="/" element={
          <LandingLayout>
            <HomePage />
          </LandingLayout>
        } />
        <Route path="/signup" element={
          <LandingLayout>
            <Signup />
          </LandingLayout>
        } />
        <Route path="/login" element={
          <LandingLayout>
            <Login />
          </LandingLayout>
        } />
        <Route path="/about" element={
          <LandingLayout>
            <AboutPage />
          </LandingLayout>
        } />
        <Route path="/product" element={
          <LandingLayout>
            <ProductsPage />
          </LandingLayout>
        } />
        <Route path="/pricing" element={
          <LandingLayout>
            <PricingPage />
          </LandingLayout>
        } />
        <Route path="/support" element={
          <LandingLayout>
            <SupportPage />
          </LandingLayout>
        } />

        {/* Dashboard Routes - Protected */}
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          </ProtectedRoute>
        } />

        {/* 404 */}
        <Route path="*" element={
          <LandingLayout>
            <NotFound />
          </LandingLayout>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
