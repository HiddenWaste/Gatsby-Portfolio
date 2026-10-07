// src/pages/projects/sonicPoetry.js
import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/layout";

const SonicPoetryPage = () => {
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
              NLP & Algorithmic Music
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
              Word2Vec Sonic Poetry
            </h1>
            <p className="text-slate-600 mt-2 text-base">
              A generative melody engine mapping high-dimensional word vectors to musical scales.
            </p>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap gap-3 shrink-0">
            <a
              href="https://word2vec-sonic-poetry.netlify.app/"
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
              href="https://github.com/HiddenWaste/Word2Vec-Sonic-Poetry"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold transition inline-flex items-center"
            >
              GitHub Repo
            </a>
          </div>
        </div>

        {/* Advisory Card */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-xs sm:text-sm text-amber-800 flex items-start space-x-3">
          <span className="text-amber-600 font-bold text-base">⚠️</span>
          <p>
            <strong>Content Notice:</strong> The raw Word2Vec embeddings reflect unstructured web crawls and may contain unfiltered words. User discretion is advised.
          </p>
        </div>

        {/* Interactive App Embed */}
        <div className="bg-white rounded-3xl p-4 sm:p-6 border border-slate-200/80 shadow-sm space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-500 px-2">
            <span className="font-medium text-slate-700">Live Interactive Model</span>
            <a
              href="https://word2vec-sonic-poetry.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-700 hover:underline inline-flex items-center"
            >
              Open fullscreen ↗
            </a>
          </div>
          <div className="w-full h-[550px] sm:h-[650px] rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 shadow-inner">
            <iframe
              src="https://word2vec-sonic-poetry.netlify.app/"
              title="sonicPoetryProject"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </div>
        </div>

        {/* Architecture Details */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            How It Works
          </h2>
          <div className="space-y-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            <p>
              This project bridges natural language vector representations with sonic sequencing:
            </p>
            <ul className="list-disc list-inside space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-100 text-slate-700 text-sm">
              <li><strong>Vector Neighbor Search:</strong> The model finds <code className="text-purple-700 bg-purple-50 px-1 py-0.5 rounded">n</code> nearby semantic words based on user input.</li>
              <li><strong>Distance Metric:</strong> Measures vector distance and cosine similarity between terms.</li>
              <li><strong>Temporal Sequence:</strong> Consecutive neighboring words cross-fade into musical phrases.</li>
              <li><strong>Rhythmic Subdivision:</strong> Note subdivision length is dynamically computed as: <code className="text-purple-700 bg-purple-50 px-1 py-0.5 rounded">(beat length) / (number of letters)</code>.</li>
              <li><strong>Pitch Mapping:</strong> Maps ASCII code modulus (<code className="text-purple-700 bg-purple-50 px-1 py-0.5 rounded">ascii % 8</code>) to predefined musical scales.</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SonicPoetryPage;

export const Head = () => <title>Word2Vec Sonic Poetry | Carter Gordon</title>;