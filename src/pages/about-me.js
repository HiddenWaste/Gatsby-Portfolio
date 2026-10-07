// src/pages/about-me.js
import React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";
import { me0 } from "../images";

const AboutMePage = () => {
  const interests = [
    { name: "Piano & Composition", icon: "🎹" },
    { name: "Creative Coding & Audio Tech", icon: "💻" },
    { name: "Music Analysis & Deep Listening", icon: "🎧" },
    { name: "Cinema & Visual Media", icon: "🎬" },
    { name: "Philosophy & Reading", icon: "📚" },
  ];

  return (
    <Layout>
      <div className="space-y-10">
        {/* Header */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            About Me
          </h1>
          <p className="text-slate-600 mt-2 text-base sm:text-lg">
            Audio technologist, software experimenter, and creative thinker.
          </p>
        </div>

        {/* Bio Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="shrink-0">
            <img
              src={me0}
              alt="Carter Gordon"
              className="w-44 h-44 sm:w-52 sm:h-52 rounded-2xl object-cover ring-4 ring-purple-100 shadow-md"
            />
          </div>

          <div className="flex-1 space-y-4 text-center md:text-left">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md">
                Profile
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
                Carter Gordon
              </h2>
              <p className="text-slate-500 text-sm mt-0.5">
                Age 24 • Brandon, SD
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 text-sm space-y-2">
              <h3 className="font-semibold text-slate-800">Education & Degrees:</h3>
              <ul className="text-slate-600 space-y-1 list-disc list-inside">
                <li>B.S. in Digital Sound Design</li>
                <li>B.S. in Artificial Intelligence</li>
                <li>Creative Coding Certificate</li>
              </ul>
            </div>

            <div className="pt-2 flex flex-wrap justify-center md:justify-start gap-3">
              <a
                href="https://linktr.ee/cartergordon"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-xl bg-purple-700 hover:bg-purple-800 text-white text-sm font-medium transition shadow-sm"
              >
                Linktree Profile
                <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a
                href="https://github.com/HiddenWaste"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium transition"
              >
                GitHub @HiddenWaste
              </a>
            </div>
          </div>
        </div>

        {/* Interests */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Passions & Interests
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            My work and spare time intersect across audio synthesis, algorithmic arts, software design, and media:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
            {interests.map((item) => (
              <div
                key={item.name}
                className="flex items-center p-3 rounded-xl bg-slate-50 border border-slate-200/60 text-slate-700 text-sm font-medium"
              >
                <span className="text-xl mr-3">{item.icon}</span>
                <span>{item.name}</span>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-sm pt-2">
            Many of these explorations are detailed on my{" "}
            <Link to="/blog" className="text-purple-700 font-semibold underline underline-offset-2 hover:text-purple-900">
              Blog & Essays
            </Link>
            .
          </p>
        </div>

        {/* Resume Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Resume</h2>
              <p className="text-slate-500 text-sm mt-0.5">
                Preview my current qualifications or download a copy.
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <a
                href="/resume.pdf"
                download="Carter_Gordon_Resume.pdf"
                className="inline-flex items-center px-4 py-2 rounded-xl bg-purple-700 hover:bg-purple-800 text-white text-sm font-semibold transition shadow-sm"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download PDF
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold transition"
              >
                Open in Tab
              </a>
            </div>
          </div>

          {/* Embedded Viewer (responsive, hidden on small screens where mobile PDFs don't embed nicely) */}
          <div className="hidden sm:block rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-inner">
            <iframe
              src="/resume.pdf"
              className="w-full h-[750px] border-0"
              title="Carter Gordon Resume"
            />
          </div>

          {/* Mobile Fallback Card */}
          <div className="block sm:hidden bg-purple-50 border border-purple-200 rounded-2xl p-5 text-center space-y-3">
            <p className="text-sm font-medium text-purple-900">
              PDF preview is best viewed directly on mobile devices.
            </p>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 rounded-xl bg-purple-700 text-white text-sm font-semibold shadow-sm"
            >
              View Resume (PDF)
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutMePage;
export const Head = () => <title>About Me | Carter Gordon</title>;