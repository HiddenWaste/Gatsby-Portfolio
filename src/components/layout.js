// src/components/layout.js

import React from "react";
import Sidebar from "./sidebar";

const layoutStyles = {
  display: "flex",
};

const contentStyles = {
  marginLeft: "250px", // Adjust this margin to match the sidebar width when it's open
  transition: "margin-left 0.3s",
  padding: "20px",
  width: "100%",
};

const Layout = ({ children }) => {
  return (
    <div style={layoutStyles}>
      <Sidebar />
      <div style={contentStyles}>
        {children}
      </div>
    </div>
  );
};

export default Layout;