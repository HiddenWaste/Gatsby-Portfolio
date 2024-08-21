import React from "react";
import Layout from "../components/layout"; // Corrected import path
import { pageStyles, headingStyles, headingAccentStyles, paragraphStyles } from "../styles";

const GithubFun = () => {       // Initialize the object that is the page ( a constant)
    return (        // Returns the page content as the object
        <Layout>            
                <main style={pageStyles}>          
                        {/* Start of the html section */}
                        <h1 style={headingStyles}> GitHub Galore!!! </h1>

                        <p style={paragraphStyles}>
                            This is a page where I've linked a lot of the the really cool repositories
                            I've found on GitHub, both to showcase my interests and as a bookmarked page
                            for myself.
                        </p>

                        <h3 style={headingAccentStyles}> Games </h3>
                        <h3 style={headingAccentStyles}> Applications </h3>
                        <h3 style={headingAccentStyles}> Visualizations </h3>
                        <h3 style={headingAccentStyles}> Libraries \ Collections </h3>
                        
                </main>
        </Layout>
    )                   
    
}   // End of page object

export default GithubFun;       // Export the object as the page (component??)

export const Head = () => <title>Fun GitHub Repositories!</title>;     // Export the Title of the resulting webpage