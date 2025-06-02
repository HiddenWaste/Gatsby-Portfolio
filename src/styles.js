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
  padding: "10px",
  zIndex: 500
};