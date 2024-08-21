// src/pages/second-page.js

import React from "react";
import Layout from "../components/layout"; // Corrected import path

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const SecondPage = () => {
  return (
    <Layout>
      <main style={pageStyles}>
        <p>Here we shall begin with our very own testing!</p>

        <img alt="sterling-archer" src="/images/sterling-archer-drinking.jpg"></img>
      </main>
    </Layout>
  );
};

export default SecondPage;

export const Head = () => <title>Second Page</title>;
