import React from "react";
import Layout from "../../components/layout";
import { pageStyles, headingAccentStyles, paragraphStyles } from "../../styles";

{/* F-E-R-M Project */}

const FermPage = () => {
    return (
        <Layout>
            <main style={pageStyles}>
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

                        <br></br>

                            <div id="ferm-description">
                            This has been one of my favorite creations to make. Using it is super simple!

                            <ul>
                                <li>Search for sounds via the textbox and click search</li>
                                <li>Add sounds you like to the rhythm handler</li>
                                <li>Mix, (Add Effects)</li>
                                <li>Name the file and record your output!</li>
                            </ul>
                            </div>
                        
            </main>
        </Layout>
    );
};

export default FermPage;

export const Head = () => <title>F-E-R-M</title>;