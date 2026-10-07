// src/components/layout.js
import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Sidebar from "./sidebar";

const Layout = ({ children }) => {
  // Sidebar default open on desktop, closed on mobile
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth >= 768) {
      setIsSidebarOpen(true);
    }
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased font-sans">
      {/* Mobile Top Header */}
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-200 md:hidden flex items-center justify-between px-4 py-3">
        <button
          onClick={toggleSidebar}
          aria-label="Toggle navigation menu"
          className="p-2 rounded-lg text-slate-700 hover:text-purple-700 hover:bg-slate-100 transition focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <Link to="/" className="font-bold text-slate-900 hover:text-purple-700 transition text-base">
          Carter Gordon
        </Link>

        <Link
          to="/blog"
          className="text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-100 text-purple-700 hover:bg-purple-200 transition"
        >
          Blog
        </Link>
      </header>

      {/* Desktop Expand Button (when sidebar is closed on desktop) */}
      {!isSidebarOpen && (
        <button
          onClick={toggleSidebar}
          title="Open sidebar"
          aria-label="Open sidebar"
          className="hidden md:flex fixed top-4 left-4 z-30 p-2.5 bg-white border border-slate-200 shadow-md rounded-xl text-slate-700 hover:text-purple-700 hover:bg-purple-50 transition items-center space-x-2 group"
        >
          <svg className="w-5 h-5 text-slate-500 group-hover:text-purple-600 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <span className="text-xs font-medium text-slate-600 group-hover:text-purple-700">Menu</span>
        </button>
      )}

      {/* Responsive Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Main Content Area */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "md:ml-72" : "md:ml-0"
        }`}
      >
        <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
          {children}
        </main>

        {/* Standard, non-fixed, responsive footer */}
        <footer className="border-t border-slate-200 bg-white py-6 mt-12 text-slate-500 text-xs sm:text-sm">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-medium text-slate-700">Carter Gordon Portfolio & Lab</p>
              <p className="text-xs text-slate-400 mt-0.5">Sound Design • Artificial Intelligence • Creative Code</p>
            </div>
            
            <div className="flex flex-wrap items-center gap-4 text-xs">
              <Link to="/" className="hover:text-purple-700 transition">Home</Link>
              <Link to="/about-me" className="hover:text-purple-700 transition">About</Link>
              <Link to="/blog" className="hover:text-purple-700 transition">Blog</Link>
              <Link to="/github-fun" className="hover:text-purple-700 transition">GitHub</Link>
              <Link to="/404" className="hover:text-purple-700 transition">404 Debug</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;