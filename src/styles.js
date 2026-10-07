// src/styles.js
// Modern, responsive styles and Tailwind class helpers for easy customization

export const pageStyles = {
  color: "#1e293b",
  fontFamily: "inherit",
};

export const headingStyles = {
  marginTop: 0,
  marginBottom: "1.5rem",
  fontWeight: "800",
  letterSpacing: "-0.02em",
};

export const headingAccentStyles = {
  color: "#754095",
};

export const paragraphStyles = {
  margin: "16px 0",
  fontSize: "1.05rem",
  lineHeight: 1.7,
  color: "#334155", // Fixed: Was previously #fff (white on white)
};

export const highlightedParagraphStyles = {
  ...paragraphStyles,
  backgroundColor: "#fef9c3",
  borderLeft: "4px solid #eab308",
  padding: "12px 16px",
  borderRadius: "6px",
};

export const noteParagraphStyles = {
  ...paragraphStyles,
  fontStyle: "italic",
  color: "#64748b",
};

export const linkStyle = {
  color: "#754095",
  fontWeight: "600",
  textDecoration: "underline",
  textUnderlineOffset: "3px",
};

// Responsive Project Showcase Styles (can also be styled directly via Tailwind in index.js)
export const projectsShowcaseStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "24px",
  margin: "32px 0",
};

export const projectCardStyles = {
  position: "relative",
  aspectRatio: "16 / 9",
  borderRadius: "14px",
  overflow: "hidden",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  textDecoration: "none",
  color: "inherit",
  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
  display: "block",
  backgroundColor: "#1e1e24",
};

export const projectCardHoverStyles = {
  transform: "translateY(-4px)",
  boxShadow: "0 14px 25px -5px rgba(0, 0, 0, 0.2)",
};

export const projectCardImageStyles = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "transform 0.4s ease",
};

export const projectCardOverlayStyles = {
  position: "absolute",
  inset: 0,
  background: "linear-gradient(180deg, rgba(15, 23, 42, 0.1) 0%, rgba(15, 23, 42, 0.8) 100%)",
  display: "flex",
  alignItems: "flex-end",
  padding: "16px 20px",
  transition: "background 0.3s ease",
};

export const projectCardTitleStyles = {
  color: "#ffffff",
  fontSize: "1.35rem",
  fontWeight: "700",
  margin: 0,
  textShadow: "0 2px 4px rgba(0,0,0,0.6)",
};

// Re-usable Tailwind class presets for fast copy-pasting
export const tailwindPresets = {
  card: "bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition p-6",
  badge: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800",
  buttonPrimary: "inline-flex items-center px-4 py-2 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-medium shadow-sm transition",
  buttonSecondary: "inline-flex items-center px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition",
};