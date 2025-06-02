import React from "react";
import Layout from "../../components/layout";
import { pageStyles, headingAccentStyles, paragraphStyles } from "../../styles";

{/* Word2Vec Project */}

const sonicPoetryPage = () => {
    return (
        <Layout>
            <main style={pageStyles}>
                <h2 style={headingAccentStyles}>Word2Vec Sonic Poetry</h2>
                        <p style={paragraphStyles}>
                          A fun little melody generator I made for a class.


                          <h4>Usage:</h4>
                          <ul>
                            <li>Wait for the neural model to be loaded....</li>
                            <li>Type a word into the box to search and click generate!</li>
                          </ul>
                        </p>

                        <h1 id="warning" style={{color: "red"}}>WARNING: WORD2VEC CONTAINS SOME VERY UNKIND WORDS. USER DISCRETION IS ADVISED.</h1>
                        <div style={{ height: "600px", width: "100%", marginBottom: "0px" }}>
                          <figure style={{ margin: "0 auto", width: "80%", height: "80%" }}>
                          <iframe
                            src="https://word2vec-sonic-poetry.netlify.app/"
                            title="sonicPoetryProject"
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

                            <div id="description">
                                <p>
                                    <h3>How it Works:</h3>
                                    <ul>
                                        <li>Model finds n nearby words based off input</li>
                                        <li>Model gives word and its 'distance' from original word for each found</li>
                                        <li>Next word in the sequence is faded in</li>
                                        <li>Each letter is a note...</li>
                                        <li>The note's subdivision is (length of the beat) / (num of letters in word)</li>
                                        <li>The note itself is found by:
                                            <ol>
                                                <li>Finding ascii number of current letter</li>
                                                <li>Finding (ascii num of letter) % 8</li>
                                                <li>Using that as a mapping to a predetermined scale</li>
                                            </ol>
                                        </li>
                                    </ul>
                        </p>
                            </div>
                        
            </main>
        </Layout>
    );
};

export default sonicPoetryPage;

export const Head = () => <title>Word2Vec Sonic Poetry</title>;