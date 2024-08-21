// src/pages/bird-page.js

import React from "react";
import Layout from "../components/layout"; // Corrected import path

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};

const birdListStyles = {
  listStyleType: "none",
  padding: 0,
};

const birdItemStyles = {
  fontSize: 24,
  marginBottom: 30,
};

const BirdPage = () => {
  return (
    <Layout>
      <main style={pageStyles}>
        <h1 style={headingStyles}>Birds of South Dakota</h1>
        <p style={paragraphStyles}>
          South Dakota is home to a diverse range of bird species. Here are some of the birds you might encounter in this region:
        </p>
        <ul style={birdListStyles}>
          <li style={birdItemStyles}>
            <strong>American Goldfinch</strong> - A small, vibrant yellow bird often found in open fields and backyards.
          </li>
          <li style={birdItemStyles}>
            <strong>Red-winged Blackbird</strong> - Known for its distinctive red shoulder patches, often found near wetlands.
          </li>
          <li style={birdItemStyles}>
            <strong>Great Horned Owl</strong> - A large owl with tufts of feathers on its head, found in forests and open fields.
          </li>
          <li style={birdItemStyles}>
            <strong>Northern Cardinal</strong> - A bright red bird with a crest on its head, commonly seen in wooded areas and gardens.
          </li>
          <li style={birdItemStyles}>
            <strong>Bald Eagle</strong> - A majestic bird of prey with a white head and tail, often seen near large bodies of water.
          </li>
          <li style={birdItemStyles}>
            <strong>Western Meadowlark</strong> - The state bird of South Dakota, known for its beautiful song and yellow breast with a black "V".
          </li>
        </ul>
      </main>
    </Layout>
  );
};

export default BirdPage;

export const Head = () => <title>Birds of South Dakota</title>;
