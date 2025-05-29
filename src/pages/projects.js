// src/pages/projects.js

import React from "react";
import Layout from "../components/layout";
import { pageStyles, headingStyles, headingAccentStyles, paragraphStyles } from "../styles";

const ProjectsPage = () => {
  return (
    <Layout>
      <main style={pageStyles}>
        <p style={paragraphStyles}>
          <h1 style={headingStyles}>Web Audio Projects</h1>
          Here are some of my interactive web audio projects! These showcase various aspects of 
          digital sound design, music theory, and creative coding with web technologies.
        </p>
        <br></br>

        {/* F-E-R-M Project */}
        <h2 style={headingAccentStyles}>F-E-R-M</h2>
        <p style={paragraphStyles}>
          An interactive web audio project exploring frequency, envelope, rhythm, and modulation.
        </p>
        <div style={{ height: "600px", width: "100%", marginBottom: "40px" }}>
          <figure style={{ margin: "0 auto", width: "100%", height: "100%" }}>
          <iframe
            src="https://f-e-r-m.netlify.app/"
            title="F-E-R-M Web Audio Project"
            allowFullScreen
            style={{ 
              height: "100%", 
              width: "100%", 
              border: "2px solid #ddd",
              borderRadius: "8px"
            }}
          />
          <figcaption><a href="https://f-e-r-m.netlify.app/">Webpage</a>    <a href="https://github.com/HiddenWaste/F-E-R-M">GitHub Repo</a></figcaption>
          </figure>
        </div>

        <br></br><br></br>

        {/* Word2Vec Sonic Poetry Project */}
        <h2 style={headingAccentStyles}>Word2Vec Sonic Poetry</h2>
        <p style={paragraphStyles}>
          A creative exploration combining natural language processing with generative audio, 
          creating sonic poetry through word vector relationships.
        </p>
        <div style={{ height: "600px", width: "100%", marginBottom: "40px" }}>
          <figure style={{ margin: "0 auto", width: "100%", height: "100%" }}>
          <iframe
            src="https://word2vec-sonic-poetry.netlify.app/"
            title="Word2Vec Sonic Poetry Project"
            allowFullScreen
            style={{ 
              height: "100%", 
              width: "100%", 
              border: "2px solid #ddd",
              borderRadius: "8px"
            }}
          />
          <figcaption><a href="https://word2vec-sonic-poetry.netlify.app/">Webpage</a>    <a href="https://github.com/HiddenWaste/Word2Vec-Sonic-Poetry">GitHub Repo</a></figcaption>
          </figure>
        </div>

            <br></br><br></br>
        {/* YouTube Videos Section */}
        <h2 style={headingAccentStyles}>Project Videos</h2>
        <p style={paragraphStyles}>
          Videos showcasing some of my other audio projects and experiments:
        </p>
        
        <div style={{ marginBottom: "30px" }}>
          <h3>Blanket-Synth 1.0</h3>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/watch?v=Us90SciE54w"
            title="Blanket Synth Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{ 
              borderRadius: "8px",
              maxWidth: "560px"
            }}>
          </iframe>
        </div>

        {/* Audio Embeddings Section */}
        <h2 style={headingAccentStyles}>Audio Samples & Music</h2>
        
        <div style={{ marginBottom: "20px" }}>
          <h3>State Park Field Recording</h3>
          <iframe
            width="70%"
            height="150"
            scrolling="no"
            frameBorder="no"
            title="Hartford Beach Field Recording"
            src='https://w.soundcloud.com/player?url=https://soundcloud.com/kigner/garf-screm?si=edd0518ccd2c42eba01ba2384cd1cadb&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'
            style={{ borderRadius: "8px" }}>
          </iframe>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <h3>Featured Track</h3>
          <iframe
            src="https://open.spotify.com/embed/track/0hPRWztAIbNkt6GcFcLiqF?utm_source=generator"
            width="85%"
            height="152"
            title="Matte Black - Spotify Embed"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            style={{ borderRadius: "12px" }}>
          </iframe>
        </div>

      </main>
    </Layout>
  );
};

export default ProjectsPage;

export const Head = () => <title>Web Audio Projects</title>;