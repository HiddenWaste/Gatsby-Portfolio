// src/pages/projects/ferm.js
import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/layout";

const FermPage = () => {
  return (
    <Layout>
      <div className="space-y-8 max-w-4xl mx-auto">
        {/* Navigation Breadcrumb */}
        <div>
          <Link
            to="/"
            className="inline-flex items-center text-sm font-semibold text-purple-700 hover:text-purple-900 transition group"
          >
            <svg
              className="w-4 h-4 mr-1.5 transform group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Projects
          </Link>
        </div>

        {/* Project Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md">
              Web Audio Project
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
              F-E-R-M
            </h1>
            <p className="text-slate-600 mt-2 text-base">
              Frequency, Envelope, Rhythm, and Modulation. An interactive browser-based sound sampler & beatmaker.
            </p>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap gap-3 shrink-0">
            <a
              href="https://f-e-r-m.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-purple-700 hover:bg-purple-800 text-white text-sm font-semibold transition shadow-sm inline-flex items-center"
            >
              Launch Live App
              <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a
              href="https://github.com/HiddenWaste/F-E-R-M"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold transition inline-flex items-center"
            >
              GitHub Repo
            </a>
          </div>
        </div>

        {/* Interactive App Embed */}
        <div className="bg-white rounded-3xl p-4 sm:p-6 border border-slate-200/80 shadow-sm space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-500 px-2">
            <span className="font-medium text-slate-700">Live Preview</span>
            <a
              href="https://f-e-r-m.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-700 hover:underline inline-flex items-center"
            >
              Open fullscreen ↗
            </a>
          </div>
          <div className="w-full h-[550px] sm:h-[650px] rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 shadow-inner">
            <iframe
              src="https://f-e-r-m.netlify.app/"
              title="F-E-R-M Web Audio Project"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </div>
        </div>

        {/* Project Description & How-to */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            About the Project
          </h2>
          <p className="text-slate-600 leading-relaxed">
            This has been one of my favorite creations to build. Using it is super simple and immediate:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {[
              { step: "1", title: "Search Sounds", desc: "Search for audio samples via the textbox and query the library." },
              { step: "2", title: "Rhythm Handler", desc: "Add samples you like directly into the interactive rhythm sequence handler." },
              { step: "3", title: "Mix & Effects", desc: "Adjust modulation parameters, apply audio effects, and dial in the mix." },
              { step: "4", title: "Record & Export", desc: "Name your production file and capture/record the output in real time!" },
            ].map((item) => (
              <div key={item.step} className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 space-y-1">
                <span className="text-xs font-bold text-purple-700 bg-purple-100 px-2 py-0.5 rounded-full">
                  Step {item.step}
                </span>
                <h3 className="font-semibold text-slate-800 text-sm">{item.title}</h3>
                <p className="text-xs text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FermPage;

export const Head = () => <title>F-E-R-M | Carter Gordon</title>;