// src/pages/about-me.js

// Necessary Imports
import React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";

const pageStyles = {
  background: "#d9a9ff",
  padding: "20px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const bioImageStyles = {
  border: "3px solid black",
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
        <div>
          <figure id="bio">
            <img
              src="/images/MathHomework.PNG"
              style={bioImageStyles}
              alt="biopic"
            />
            <figcaption>
              <ul>
                <li>Age: 23</li>
                <li>Hometown: Brandon, SD</li>
                <li>
                  Majors: Digital Sound Design <br />
                  and Artificial Intelligence
                </li>
                <li>
                  <a href="https://linktr.ee/cartergordon" target="_blank" rel="noopener noreferrer">
                    Linktree
                  </a>
                </li>
              </ul>
            </figcaption>
          </figure>
        </div>

        {/* Occupation Listing */}
        <div id="OccupationList">   
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
        </div>

        <div>
          My various interests include:
          <ul id="InterestList" style={interestListStyles}>
            <li>Playing Piano</li>
            <li>Coding / Computer related projects</li>
            <li>Listening to Music</li>
            <li>Watching Movies / TV</li>
            <li>
              Reading (Currently reading The Prince by Nicolo Machiavelli)
            </li>
          </ul>
          <p> Most of these are showcased to some degree on my <Link to="/blog">Blog</Link>.   </p>
        </div>
      </main>
    </Layout>
  );
};

export default AboutMePage;

export const Head = () => <title>About Me</title>;
