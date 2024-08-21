// src/components/sidebar.js

// Necessary Imports
import React, { useState } from "react";
import { Link } from "gatsby";

// Style Settings for Toggle Button for Sidebar
const toggleButtonStyles = {
  cursor: 'pointer',
  padding: '5px',               // Internal Padding of Button Text
  backgroundColor: '#1180c7',
  color: '#fff',
  border: 'none',               // Color of Button Text
  borderRadius: '5px',
  position: 'fixed',
  top: '10px',
  left: '10px',
  zIndex: '1000',
};

// Style Settings for The Sidebar Itself
const sidebarStyles = (isOpen) => ({
  width: isOpen ? '125px' : '0',
  padding: isOpen ? '20px' : '0',
  background: '#f4f4f4',
  borderRight: isOpen ? '1px solid #ddd' : 'none',
  height: '100vh',
  position: 'fixed',
  overflow: 'hidden',
  transition: 'width 0.3s, padding 0.3s',
});

// General Link Styles
const linkStyles = {
  display: 'block',
  margin: '10px 0',
  color: '#333',
  textDecoration: 'none',
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggleSidebar} style={toggleButtonStyles}>
        {isOpen ? '|======|' : '=='}
      </button>
      <nav style={sidebarStyles(isOpen)}>
        {isOpen && (
          <>
            <h2>Navigation</h2>
            <Link to="/" style={linkStyles}>Home</Link>
            <Link to="/second-page" style={linkStyles}>Second Page</Link>
            <Link to="/birds" style={linkStyles}>Birds of South Dakota</Link>
            <Link to="/about-me" style={linkStyles}>About Me</Link>
            <h2> Blog </h2>
            <Link to="/blog" style={linkStyles}>Blog Homepage</Link>
            {/* Add more links here */}
          </>
        )}
      </nav>
    </>
  );
};

export default Sidebar;