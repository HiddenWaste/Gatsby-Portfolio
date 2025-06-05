// src/pages/index.js

import React, { useState } from "react";
import { Link } from "gatsby";
import { ferm, word2vec, smg, blanketsynth } from "../images";

import Layout from "../components/layout";
import { 
  pageStyles, 
  headingStyles, 
  headingAccentStyles, 
  linkStyle, 
  paragraphStyles, 
  footerStyles,
  projectsShowcaseStyles,
  projectCardStyles,
  projectCardImageStyles,
  projectCardOverlayStyles,
  projectCardTitleStyles,
  projectCardHoverStyles
} from "../styles";

const IndexPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Project data - easy to extend with new projects
  const projects = [
    {
      id: "ferm",
      title: "F-E-R-M",
      link: "/projects/ferm",
      // Placeholder image - replace with actual project images
      image: ferm
    },
    {
      id: "sonic-poetry", 
      title: "Word2Vec Sonic Poetry",
      link: "/projects/sonicPoetry",
      image: word2vec
    },
    {
      id: "smg",
      title: "S-M-G", 
      link: "/projects/smg",
      image: smg
    },
    {
      id: "blanket-synth",
      title:"Blanket-Synth",
      link: "/projects/blanket-synth",
      image: blanketsynth
    }
  ];

  return (
    <Layout>
      <main style={pageStyles}>
        <h1 style={headingStyles}>
          Welcome!
          <span style={headingAccentStyles}> This is my Portfolio! 🎉🎉</span>
        </h1>

        <h2>Check out some of my online projects below!</h2>
        
        {/* Project Showcase Grid */}
        <div style={projectsShowcaseStyles}>
          {projects.map((project) => (
            <Link
              key={project.id}
              to={project.link}
              style={{
                ...projectCardStyles,
                ...(hoveredCard === project.id ? projectCardHoverStyles : {})
              }}
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <img
                src={project.image}
                alt={`${project.title} project preview`}
                style={projectCardImageStyles}
              />
              <div style={projectCardOverlayStyles}>
                <h3 style={projectCardTitleStyles}>
                  {project.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        <br /><br />

        <p style={paragraphStyles}>
          Here I have my projects showcased as my portfolio, and a blog page where I make posts ranging from
          the music I am listening to, books I'm reading, or computer science / AI related stuff!

          <br /><br />

          This website has been one of my major passion projects for a while. I didn't take any web development courses
          in college so I have learned all these technologies on my own time. I've found a real enjoyment in it and plan
          to continually improve and update this site.

          <br /><br />

          The projects showcased here are a combination of many different things but ultimately all point towards what I
          enjoy doing: creating new venues and tools for artistic expression. I find both P.A.C.E and F-E-R-M are the main
          showcases of this ideology. I use Ferm quite often myself as its simply fun to use! Which was one of the major reasons
          I had worked so long on it and made so many different capabilities.
        </p>

        <div style={footerStyles}>
          <p>
            404 pages, for debugging and style<br />
            <Link to="/404" style={linkStyle}>Custom 404 Page</Link> <br />
            <Link to="/fakepagelink" style={linkStyle}>404 Page</Link>
            <br />
            <br />
          </p>
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;