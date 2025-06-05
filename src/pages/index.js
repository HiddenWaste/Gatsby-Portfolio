// src/pages/index.js

import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout"; // Corrected import path
import { pageStyles, headingStyles, headingAccentStyles, linkStyle, paragraphStyles, footerStyles } from "../styles";

const IndexPage = () => {
  return (
    <Layout>
      <main style={pageStyles}>
        <h1 style={headingStyles}>
          Welcome!
          <span style={headingAccentStyles}> This is my Portfolio! 🎉🎉</span>
        </h1>

        {/* Carousel of Homepage Images */}

          <h2>Check out some of my online projects below!</h2>
        {/* Project Showcase */}
        <div id="projectsContainer">

          <div id="fermContainer">
        <Link to="/projects/ferm" style={linkStyle}>F-E-R-M</Link>
          </div>

          <div id="sonicPoetryContainer">
            <Link to="/projects/sonicPoetry" style={linkStyle}>Word2Vec Sonic Poetry</Link>
          </div>

          <div id="musicGeneratorContainer">
            <Link to="/projects/smg" style={linkStyle}>S-M-G</Link>
          </div>
          
        </div>

        {/* End Showcase */}
        <br></br> <br></br>

        <p style={paragraphStyles}>
          Here I have my projects showcased as my portfolio, and a blog page where I make posts ranging from
          the music I am listening to, books I'm reading, or computer science / AI related stuff!

          <br /><br />

          This website has been one of my major passion projects for a while. I didn't take any web development courses
          in college so I have learned all these technologies on my own time. I've found a real enjoyment in it and plan
          to continually improve and update this site.

          <br></br>

          The projects showcased here are a combination of many different things but ultimately all point towards what I
          enjoy doing: creating new venues and tools for artistic expression. I find both P.A.C.E and F-E-R-M are the main
          showcases of this ideology. I use Ferm quite often myself as its simply fun to use! Which was one of the major reasons
          I had worked so long on it and made so many different capabilites.
        </p>


      <div style={footerStyles}>
        <p>
          404 pages, for debugging and style<br />
          <Link to="/404" style={linkStyle}>Custom 404 Page</Link> <br />
          <Link to="/fakepagelink" style={linkStyle}>404 Page</Link>
          <br />
          <br />
        </p>
      </div>
        

      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>; 