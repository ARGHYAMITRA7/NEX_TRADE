import React from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import AuthCheck from "./AuthCheck";

const Home = () => {
  return (
    <AuthCheck>
      <TopBar />
      <Dashboard />
    </AuthCheck>
  );
};

export default Home;