import React, { useEffect } from 'react';
import { getStoredAuth } from '../auth';

const ProtectedDashboard = () => {
  useEffect(() => {
    const auth = getStoredAuth();
    const frontendUrl = process.env.REACT_APP_FRONTEND_URL || 'http://localhost:3000';
    const dashboardUrl = process.env.REACT_APP_DASHBOARD_URL || 'http://localhost:3001';
    window.location.assign(auth.token ? `${dashboardUrl}/` : `${frontendUrl}/login`);
  }, []);

  return <div style={{ padding: '2rem' }}>Redirecting to dashboard...</div>;
};

export default ProtectedDashboard;
