import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AUTH_CHANGE_EVENT_NAME, clearAuth, getStoredAuth } from "../auth";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const syncAuthState = () => {
    const auth = getStoredAuth();
    setIsLoggedIn(Boolean(auth.token));
    setUser(auth.user);
  };

  useEffect(() => {
    syncAuthState();

    window.addEventListener(AUTH_CHANGE_EVENT_NAME, syncAuthState);
    return () => window.removeEventListener(AUTH_CHANGE_EVENT_NAME, syncAuthState);
  }, []);

  const handleLogout = () => {
    clearAuth();
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container p-2">
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            alt="logo"
            style={{ width: "25%" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {isLoggedIn ? (
                <>
                  <li className="nav-item">
                    <span className="nav-link active" style={{ cursor: 'default' }}>
                      Welcome, {user?.username || 'Trader'}
                    </span>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/dashboard">
                      Dashboard
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/" onClick={handleLogout}>
                      Logout
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/signup">
                      Signup
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/login">
                      Login
                    </Link>
                  </li>
                </>
              )}
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/product">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/support">
                  Support
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
