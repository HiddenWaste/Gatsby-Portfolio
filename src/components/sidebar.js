// src/components/sidebar.js
import React from "react";
import { Link } from "gatsby";
import { me0 } from "../images";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Me / Resume", path: "/about-me" },
  { name: "Blog & Essays", path: "/blog" },
  { name: "Fun GitHub Stuff", path: "/github-fun" },
];

const projectItems = [
  { name: "F-E-R-M", path: "/projects/ferm", badge: "Web Audio" },
  { name: "S-M-G", path: "/projects/smg", badge: "Tone.js" },
  { name: "Word2Vec Sonic Poetry", path: "/projects/sonicPoetry", badge: "ML / Audio" },
  { name: "Blanket Synth 1.0", path: "/projects/blanket-synth", badge: "Hardware" },
];

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-72 bg-white border-r border-slate-200 flex flex-col shadow-xl md:shadow-none transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        } ${!isOpen ? "md:hidden" : ""}`}
      >
        {/* Profile / Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <Link to="/" onClick={onClose} className="flex items-center space-x-3 group text-decoration-none">
            <img
              src={me0}
              alt="Carter Gordon"
              className="w-11 h-11 rounded-full object-cover ring-2 ring-purple-500/30 group-hover:ring-purple-600 transition"
            />
            <div>
              <h2 className="text-base font-bold text-slate-900 group-hover:text-purple-700 transition leading-tight">
                Carter Gordon
              </h2>
              <p className="text-xs text-slate-500 leading-tight">Creative Tech & AI</p>
            </div>
          </Link>

          {/* Close button for mobile and desktop */}
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
            title="Close sidebar"
            aria-label="Close sidebar"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation Links Scrollable Area */}
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
          <div>
            <p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Navigation
            </p>
            <nav className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-lg text-slate-700 hover:text-purple-700 hover:bg-purple-50 transition"
                  activeClassName="bg-purple-100/70 text-purple-800 font-semibold"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Featured Projects
            </p>
            <nav className="space-y-1">
              {projectItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                  className="flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg text-slate-700 hover:text-purple-700 hover:bg-purple-50 transition"
                  activeClassName="bg-purple-100/70 text-purple-800 font-semibold"
                >
                  <span className="truncate">{item.name}</span>
                  <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 group-hover:bg-purple-100">
                    {item.badge}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Connect
            </p>
            <div className="space-y-1">
              <a
                href="https://linktr.ee/cartergordon"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg text-slate-600 hover:text-purple-700 hover:bg-slate-50 transition"
              >
                <span>Linktree</span>
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a
                href="https://github.com/HiddenWaste"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg text-slate-600 hover:text-purple-700 hover:bg-slate-50 transition"
              >
                <span>GitHub Profile</span>
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer info in sidebar */}
        <div className="p-4 border-t border-slate-100 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Carter Gordon</p>
          <p className="text-[11px] text-slate-400 mt-0.5">Built with Gatsby & Tailwind</p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;