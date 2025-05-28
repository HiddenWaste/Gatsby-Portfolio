// src/pages/about-me.js
// Necessary Imports
import React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";
// import { me0 } from "../images"; // Importing the image from the images folder

const pageStyles = {
  background: "#d9a9ff",
  padding: "20px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const bioImageStyles = {
  border: "3px solid black",
  width: "300px", // Made it a bit smaller to fit better side by side
  height: "auto",
  borderRadius: "10px",
};

// New style for the bio container
const bioContainerStyles = {
  display: "flex",
  alignItems: "flex-start", // Aligns items to the top
  gap: "20px", // Space between image and bio info
  backgroundColor: "#f0f0f0", // Different background color
  padding: "20px",
  borderRadius: "15px",
  border: "2px solid #333",
  marginBottom: "30px",
};

// Style for the bio info section
const bioInfoStyles = {
  flex: 1, // Takes up remaining space
  fontSize: "16px",
};

const interestListStyles = {
  border: "4px dashed darkslategray",
  padding: "10px",
};

const AboutMePage = () => {
  return (
    <Layout>
      <main style={pageStyles}>
        <h1>About Me</h1>
        <br />
        <br />
        
        {/* Bio Container with image and info side by side */}
        <div style={bioContainerStyles}>
          <div>
          </div>
          
          <div style={bioInfoStyles}>
            <h3>Carter Gordon</h3>
            <ul>
              <li>Age: 24</li>
              <li>Located: Brandon, SD</li>
              <li>
                B.S in Digital Sound Design <br />
                B.S. in Artificial Intelligence <br />
                Creative Coding Certificate
              </li>
            </ul>
            <p><a href="https://linktr.ee/cartergordon" target="_blank" rel="noopener noreferrer">
                  Linktree
                </a></p>
          </div>
        </div>

        {/* Occupation Listing */}
        {/* <div id="OccupationList">  
          Current Job Occupations:
          <ul>
            <li>Sound Tech for Madison High School</li>
            <li>
              Bartender at{" "}
              <a href="https://www.theofficemadison.com/" target="_blank" rel="noopener noreferrer">
                Office Bar and Grill
              </a>
            </li>
          </ul>
        </div> */}

        <div>
          My various interests include:
          <ul id="InterestList" style={interestListStyles}>
            <li>Playing Piano</li>
            <li>Coding / Computer related projects</li>
            <li>Listening to Music</li>
            <li>Watching Movies / TV</li>
            <li>Reading</li>
          </ul>
          <p> Most of these are showcased to some degree on my <Link to="/blog">Blog</Link>.</p>
        </div>
      </main>
    </Layout>
  );
};

export default AboutMePage;
export const Head = () => <title>About Me</title>;