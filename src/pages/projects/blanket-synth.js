// src/pages/projects/blanket-synth.js
import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/layout";

const BlanketSynthPage = () => {
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
              Hardware & Video Controller
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
              Blanket-Synth 1.0
            </h1>
            <p className="text-slate-600 mt-2 text-base">
              Controlling a SuperCollider modular synth using solid-colored bed blankets as performance input.
            </p>
          </div>
        </div>

        {/* Responsive Video Embed */}
        <div className="bg-white rounded-3xl p-4 sm:p-6 border border-slate-200/80 shadow-sm space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-500 px-2">
            <span className="font-medium text-slate-700">Project Video Showcase</span>
            <a
              href="https://www.youtube.com/watch?v=Us90SciE54w"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-700 hover:underline inline-flex items-center"
            >
              Watch on YouTube ↗
            </a>
          </div>
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-slate-200 bg-black shadow-inner">
            <iframe
              src="https://www.youtube.com/embed/Us90SciE54w?si=8lCtEud0HqwdBEng"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
        </div>

        {/* Story / Concept Details */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            The Concept & Story
          </h2>
          <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
            <p>
              This was an unusual and wonderfully playful project. I originally envisioned doing computer vision body tracking
              while I slept, using micro-movements as generative sound mapping for an overnight performance.
            </p>
            <p>
              However, practically speaking, I didn't want to produce an 8-hour sleep log video with zero guarantee of bodily motion.
              In a sudden flash of creative improvisation, I decided to use the solid-colored blankets on my bed as the tangible control surface!
            </p>
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
              <h3 className="font-semibold text-slate-800 text-sm mb-2">Technical Implementation:</h3>
              <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-slate-600">
                <li>Computer vision color segmentation tracking the surface area and folds of the blankets.</li>
                <li>OSC (Open Sound Control) message routing between tracking software and SuperCollider.</li>
                <li>Dynamic modulation of filter resonance, FM operator index, and spatial panning in real-time.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlanketSynthPage;

export const Head = () => <title>Blanket-Synth 1.0 | Carter Gordon</title>;