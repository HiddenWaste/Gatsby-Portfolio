// src/styles.js

export const pageStyles = {
    color: "#232129",
    padding: 40,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
  };
  
  export const headingStyles = {
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 640,
  };
  
  export const headingAccentStyles = {
    color: "#663399",
  };

  export const paragraphStyles = {
    margin: "16px auto",  // margin: size, padding?  
    fontSize: "18px",     // Paragraph Font Style
    lineHeight: 1.5,      // Space between lines
    color: "#fff",
  };

  export const highlightedParagraphStyles = {
    ...paragraphStyles,
    backgroundColor: "#ff0",
    padding: "8px",
    borderRadius: "4px",
  };

  export const noteParagraphStyles = {
    ...paragraphStyles,
    fontStyle: "italic",
    color: "#555",
  };
  
  export const linkStyle = {
    color: "#8954A8",
    fontWeight: "bold",
    fontSize: 16,
    verticalAlign: "5%",
  };

  export const footerStyles = {
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  backgroundColor: "#333",
  color: "white",
  textAlign: "center",
  padding: "3px",
  zIndex: 500
};

// Project Showcase Styles
export const projectsShowcaseStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "20px",
  margin: "40px 0",
  padding: "0",
};

export const projectCardStyles = {
  position: "relative",
  aspectRatio: "16 / 9",
  borderRadius: "12px",
  overflow: "hidden",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  textDecoration: "none",
  color: "inherit",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  display: "block",
};

export const projectCardHoverStyles = {
  transform: "translateY(-5px)",
  boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
};

export const projectCardImageStyles = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "transform 0.3s ease",
};

export const projectCardOverlayStyles = {
  position: "absolute",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  background: "linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.4) 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "background 0.3s ease",
};

export const projectCardTitleStyles = {
  color: "white",
  fontSize: "1.5em",
  fontWeight: "bold",
  textAlign: "center",
  padding: "20px",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
  transition: "transform 0.3s ease",
  margin: "0",
};