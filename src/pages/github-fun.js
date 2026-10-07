// src/pages/github-fun.js
import React from "react";
import Layout from "../components/layout";

const curatedSections = [
  {
    category: "Applications & Tools",
    icon: "🛠️",
    items: [
      {
        name: "Resume Builder",
        author: "lucasnevespereira",
        url: "https://github.com/lucasnevespereira/resumme-builder",
        desc: "Interactive resume generator web application.",
      },
    ],
  },
  {
    category: "Users & Creators to Follow",
    icon: "🌟",
    items: [
      {
        name: "Teresa Pelinski",
        author: "pelinski",
        url: "https://github.com/pelinski",
        desc: "Researcher and creative technologist in AI, music, and interactive art.",
      },
    ],
  },
  {
    category: "Games & Audio Toys",
    icon: "🎮",
    items: [
      {
        name: "Interactive Audio Toys",
        author: "Community",
        url: "https://github.com/topics/web-audio",
        desc: "Browser audio experiments, synths, and web-based games.",
      },
    ],
  },
  {
    category: "Creative Coding & Libraries",
    icon: "📚",
    items: [
      {
        name: "Awesome Creative Coding",
        author: "terkelg",
        url: "https://github.com/terkelg/awesome-creative-coding",
        desc: "Curated list of creative coding resources, environments, and libraries.",
      },
      {
        name: "Tone.js",
        author: "Tonejs",
        url: "https://github.com/Tonejs/Tone.js",
        desc: "A Web Audio framework for making interactive music in the browser.",
      },
    ],
  },
];

const GithubFun = () => {
  return (
    <Layout>
      <div className="space-y-8 max-w-4xl mx-auto">
        {/* Header */}
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md">
            Curated Discoveries
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
            GitHub Galore
          </h1>
          <p className="text-slate-600 mt-2 text-base sm:text-lg">
            A bookmarked collection of intriguing open source repositories, generative tools, and inspirational creators.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {curatedSections.map((sec) => (
            <div
              key={sec.category}
              className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm space-y-4"
            >
              <div className="flex items-center space-x-2 border-b border-slate-100 pb-3">
                <span className="text-xl">{sec.icon}</span>
                <h2 className="text-lg font-bold text-slate-800">{sec.category}</h2>
              </div>

              <div className="space-y-3">
                {sec.items.map((item) => (
                  <a
                    key={item.url}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-3.5 rounded-xl bg-slate-50 hover:bg-purple-50/70 border border-slate-200/60 hover:border-purple-200 transition"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-slate-900 group-hover:text-purple-700 text-sm transition">
                        {item.name}
                      </span>
                      <svg
                        className="w-4 h-4 text-slate-400 group-hover:text-purple-600 transition"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                    <span className="inline-block text-[11px] text-purple-600 font-mono mt-1.5">
                      github.com/{item.author}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default GithubFun;

export const Head = () => <title>GitHub Galore | Carter Gordon</title>;