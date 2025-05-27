// src/pages/second-page.js

import React from "react";
import Layout from "../components/layout"; // Corrected import path
import { pageStyles, headingStyles, headingAccentStyles, paragraphStyles } from "../styles";
import { deadpoolwolverine } from "../images";

const SecondPage = () => {
  return (
    <Layout>
      <main style={pageStyles}>
        {/* Gatsby Logo from first starter page!*/}
        <img
          alt="deadpoolwolverine"
          src={deadpoolwolverine}
        />

        <br /><br /><br />

        <h1 style={headingStyles}> Audio Projects From Glitch </h1>

        <h2> F-E-R-M</h2>
        <div style={{ height: "420px", width: "100%" }}>
  <iframe
    src="https://glitch.com/embed/#!/embed/f-e-r-m?path=&previewSize=0"
    title="f-e-r-m on Glitch"
    allow="geolocation; microphone; camera; midi; encrypted-media; xr-spatial-tracking; fullscreen"
    allowFullScreen
    style={{ height: "100%", width: "100%", border: 0 }}
  />
  </div>
  <br></br>
  <h2>Word2Vec Sonic Poetry</h2>
  <div style={{ height: "420px", width: "100%" }}>
  <iframe
    src="https://glitch.com/embed/#!/embed/etude---1?path=readme.md&previewSize=0"
    title="etude---1 on Glitch"
    allow="geolocation; microphone; camera; midi; encrypted-media; xr-spatial-tracking; fullscreen"
    allowFullScreen
    style={{ height: "100%", width: "100%", border: 0 }}
  />
</div>
<br></br><br></br>

    <h2>Videos of Projects from my YouTube</h2>

    {/*  Blanket-Synth  */}
    {/*  Current Condition of P.A.C.E  */}
    {/*  Construction Synth V0 (proof of concept)  */}


        <p style={paragraphStyles}>
  <br></br><br></br>
        <h2 style={headingAccentStyles}>Various Embeddings!</h2>

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

<br></br>



        </p>
         

      </main>
    </Layout>
  );
};

export default SecondPage;

export const Head = () => <title>Second Page</title>;
