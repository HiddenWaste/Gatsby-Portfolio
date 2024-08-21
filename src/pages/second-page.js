// src/pages/second-page.js

import React from "react";
import Layout from "../components/layout"; // Corrected import path
import { pageStyles, headingStyles, headingAccentStyles, paragraphStyles } from "../styles";
import { deadpoolwolverine } from "../images";

const SecondPage = () => {
  return (
    <Layout>
      <main style={pageStyles}>
        <p>Here we shall begin with our very own testing!</p>


        {/* Gatsby Logo from first starter page!*/}
        <img
          alt="deadpoolwolverine"
          src={deadpoolwolverine}
        />

        <br /><br /><br />

        <h1 style={headingStyles}> Let's Check out some audio capabilities? </h1>

        <br /><br />

        <p style={paragraphStyles}>

        <h2 style={headingAccentStyles}>Audio Embedding!</h2>

        Here, I'm starting off with embedding tracks from a few different services to showcase
        to myself how to use them overall, and to figure out which ones I will use most. These
        first ones are using the gatsby-remark-embedder plugin. <br /><br />

        {/* Soundcloud Link for one of the State Park Recordings */}
        <iframe
          width="70%"
          height="150"
          scrolling="no"
          frameborder="no"
          title="hartford-beach"
          src='https://w.soundcloud.com/player?url=https://soundcloud.com/kigner/garf-screm?si=edd0518ccd2c42eba01ba2384cd1cadb&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'>
        </iframe>

        {/* Spotify embed for Matte Black */}
        <iframe 
        // style="border-radius:12px" 
        src="https://open.spotify.com/embed/track/0hPRWztAIbNkt6GcFcLiqF?utm_source=generator" 
        width="85%" 
        height="150" 
        title="Matte-Black-Embed"
        frameBorder="0" 
        allowfullscreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"
      ></iframe>

<iframe 
width="560" 
height="315" 
src="https://www.youtube.com/embed/zgXgkpu7pkg?si=uC4PXtPhm9L-oyKQ" 
title="YouTube video player" 
frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
referrerpolicy="strict-origin-when-cross-origin" 
allowfullscreen>
</iframe>

        </p>
         

      </main>
    </Layout>
  );
};

export default SecondPage;

export const Head = () => <title>Second Page</title>;
