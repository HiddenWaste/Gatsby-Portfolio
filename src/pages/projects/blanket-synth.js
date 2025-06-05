import React from "react";
import Layout from "../../components/layout";
import { pageStyles, headingAccentStyles, paragraphStyles } from "../../styles";

{/* Blanket-Synth Project */}

const blanketPage = () => {
    return (
        <Layout>
            <main style={pageStyles}>
                <h2 style={headingAccentStyles}>Blanket-Synth 1.0</h2>
                        <p style={paragraphStyles}>
                          Controlling an SC synth using solid-colored blankets
                        </p>

                        <iframe 
                        width="560" height="315" src="https://www.youtube.com/embed/Us90SciE54w?si=8lCtEud0HqwdBEng" 
                        title="YouTube video player" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                        </iframe>

                        <br></br><br></br><br></br>

                            <div id="description">
                                <p>
                                    This was quite an unusual project to begin with. I had originally envisioned doing body tracking
                            while I slept and use that as mapping so I could do a performance while I slept, but I did not want
                            to make an 8hr long video and I couldn't guarantee if I'd even move or not.

                            <br></br>

                            So I ended up with the stroke of creativity to instead use two of the solid colored blankets on my
                            bed as the control parameters.
                                </p>
                            </div>
                        
            </main>
        </Layout>
    );
};

export default blanketPage;

export const Head = () => <title>Blanket-Synth 1.0</title>;