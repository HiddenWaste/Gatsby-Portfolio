// src/components/sidebar.js

// Necessary Imports
import React, { useState } from "react";
import { Link } from "gatsby";

// importing sidebar status images
import { opensidebar, closesidebar } from "../images";

// Style Settings for Toggle Button for Sidebar
const toggleButtonStyles = {
  cursor: 'pointer',
  padding: '5px',               // Internal Padding of Button Text
  backgroundColor: '#414141',    // Background Button Color
  color: '#fff',                 // Color of Button Text
  border: 'none',              
  borderRadius: '5px',
  position: 'fixed',
  top: '10px',
  left: '10px',
  zIndex: '1000',
};

// Style for the button images
const buttonImageStyles = {
  width: '20px',
  height: '20px',
  filter: 'invert(1)', // Makes the image white to match the button color scheme
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
        <img 
          src={isOpen ? opensidebar : closesidebar} 
          alt={isOpen ? "Close sidebar" : "Open sidebar"}
          style={buttonImageStyles}
        />
      </button>
      <nav style={sidebarStyles(isOpen)}>
        {isOpen && (
          <>
            <br></br>
            <h1>Navigation</h1>
            <Link to="/" style={linkStyles}>Home</Link>
            <Link to="/second-page" style={linkStyles}>Second Page</Link>
            <Link to="/github-fun" style={linkStyles}>Fun GitHub Stuff</Link>
            <Link to="/birds" style={linkStyles}>Birds of South Dakota</Link>
            <Link to="/about-me" style={linkStyles}>About Me / Resume</Link>
            <Link to="/blog" style={linkStyles}>Blog Homepage</Link>
            {/* Add more links here */}
          </>
        )}
      </nav>
    </>
  );
};

export default Sidebar;