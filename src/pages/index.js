// src/pages/index.js

import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout"; // Corrected import path
import { pageStyles, headingStyles, headingAccentStyles, linkStyle, paragraphStyles } from "../styles";
import { goldendeer, jollyroger } from "../images";

const IndexPage = () => {
  return (
    <Layout>
      <main style={pageStyles}>
        <h1 style={headingStyles}>
          Welcome!
          <br />
          <span style={headingAccentStyles}>- This is my Portfolio / Blog! 🎉🎉</span>
        </h1>

        {/* Carousel of Homepage Images */}

        <p style={paragraphStyles}>
          Here I have my projects showcased as my portfolio, and a blog page where I make posts ranging from
          the music I am listening to, books I'm reading, or computer science / AI related stuff!

          <br /><br />

          While still in the very early stages I think this has been one of my favorite ways to build a site
          so far. With the help of ChatGPT I've been able to jumpstart this quite a bit, while learning how
          it functions simultaneously. I think the part I find the most interesting is the intersection of
          all the different languages used. HTML, Javascript, React, CSS, its all in one place!
        </p>


        <p>
          <h2 style={headingStyles}>
            Dev Links!!
          </h2>
          404 pages, for debugging and style<br />
          <Link to="/404" style={linkStyle}>Custom 404 Page</Link> <br />
          <Link to="/fakepagelink" style={linkStyle}>404 Page</Link>
          <br />
          <br />
        </p>

        <img
          alt="Golden Deer Icon"
          src={goldendeer}
          width='100' 
          height='125'
        />

      <img
        alt="Jolly Roger Icon"
        src={jollyroger}
        width='100' 
        height='125'
      />

      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>; 