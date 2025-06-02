// src/pages/projects/smg.js
import React from "react";
import Layout from "../../components/layout";
import { pageStyles, headingAccentStyles, paragraphStyles } from "../../styles";

const SMGPage = () => {
    return (
        <Layout>
            <main style={pageStyles}>
                {/* Simple Music Generator Project */}
                <h2 style={headingAccentStyles}>Simple Music Generator (S.M.G)</h2>
                <p style={paragraphStyles}>
                    Testing Tone.js
                </p>
                <div style={{ height: "600px", width: "100%", marginBottom: "40px" }}>
                    <figure style={{ margin: "0 auto", width: "100%", height: "100%" }}>
                        <iframe
                            src="https://s-m-g.netlify.app/"
                            title="SimpleMusicGenerator"
                            allowFullScreen
                            style={{
                                height: "100%",
                                width: "100%",
                                border: "2px solid #ddd",
                                borderRadius: "8px"
                            }}
                        />
                        <figcaption>
                            <a href="https://s-m-g.netlify.app/">Webpage</a>    
                            <a href="https://github.com/HiddenWaste/S-M-G">GitHub Repo</a>
                        </figcaption>
                    </figure>
                </div>
                <br />
                <div id="smg-description">
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

export default SMGPage;
export const Head = () => <title>Simple Music Generator</title>;