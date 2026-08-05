import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { clearAuth, getStoredAuth } from "../auth";

import Menu from "./Menu";

const TopBar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getStoredAuth();
    if (auth.user) {
      setUser(auth.user);
    }
  }, []);

  const handleLogout = () => {
    clearAuth();
    window.location.assign(`${process.env.REACT_APP_FRONTEND_URL || 'http://localhost:3000'}/login`);
  };

  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points">{100.2} </p>
          <p className="percent"> </p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">{100.2}</p>
          <p className="percent"></p>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        {user && (
          <span style={{ fontSize: '14px', fontWeight: 'bold' }}>
            {user.username}
          </span>
        )}
        <button 
          onClick={handleLogout}
          style={{
            padding: '8px 16px',
            backgroundColor: '#ff4444',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          Logout
        </button>
        <Menu />
      </div>
    </div>
  );
};

export default TopBar;