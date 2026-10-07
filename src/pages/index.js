// src/pages/index.js
import React, { useState } from "react";
import { Link } from "gatsby";
import { ferm, word2vec, smg, blanketsynth } from "../images";
import Layout from "../components/layout";

const IndexPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const projects = [
    {
      id: "ferm",
      title: "F-E-R-M",
      subtitle: "Frequency, Envelope, Rhythm, Modulation",
      category: "Web Audio",
      link: "/projects/ferm",
      image: ferm,
    },
    {
      id: "sonic-poetry",
      title: "Word2Vec Sonic Poetry",
      subtitle: "Melody Generation via Word Embeddings",
      category: "AI & Audio",
      link: "/projects/sonicPoetry",
      image: word2vec,
    },
    {
      id: "smg",
      title: "S-M-G",
      subtitle: "Simple Music Generator in Tone.js",
      category: "Interactive",
      link: "/projects/smg",
      image: smg,
    },
    {
      id: "blanket-synth",
      title: "Blanket-Synth 1.0",
      subtitle: "SuperCollider synth controlled via blanket states",
      category: "Hardware / Video",
      link: "/projects/blanket-synth",
      image: blanketsynth,
    },
  ];

  return (
    <Layout>
      <div className="space-y-12">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/30 text-purple-200 border border-purple-400/30 mb-4">
              Welcome to my portfolio & lab
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
              Exploring sound, AI, and creative code.
            </h1>
            <p className="text-purple-100 text-base sm:text-lg leading-relaxed mb-6">
              I build interactive audio experiments, neural generative tools, and self-publish essays
              on music, technology, and philosophy.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/about-me"
                className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold transition shadow-md shadow-purple-950/40"
              >
                About Me & Resume
              </Link>
              <Link
                to="/blog"
                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition backdrop-blur-sm border border-white/20"
              >
                Read Essays & Blog
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Featured Projects
              </h2>
              <p className="text-slate-500 text-sm mt-1">
                Interactive web audio, neural models, and unconventional controllers.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Link
                key={project.id}
                to={project.link}
                className="group relative rounded-2xl overflow-hidden bg-slate-900 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 block border border-slate-200/50"
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="aspect-[16/10] w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent flex flex-col justify-end p-5 text-white">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-purple-300 mb-1">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold leading-tight group-hover:text-purple-200 transition">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-1">
                    {project.subtitle}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Philosophy & Background */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4 text-slate-700 leading-relaxed">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            About This Site & My Work
          </h2>
          <p>
            Here I have my projects showcased as my portfolio, and a blog where I make posts ranging
            from music I'm listening to, books I'm reading, and computer science / AI related explorations.
          </p>
          <p>
            This website is one of my major passion projects. I didn't take web development courses
            in college, so I've embraced self-directed learning across these technologies. I find real
            enjoyment in this iterative process and continually refine this space.
          </p>
          <p>
            The projects showcased here all point towards what I enjoy doing most:{" "}
            <span className="font-semibold text-purple-900">
              creating new venues and tools for artistic expression
            </span>
            . Projects like P.A.C.E and F-E-R-M are core showcases of this ideology. I frequently use
            F-E-R-M myself because it's simply fun to play with!
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Carter Gordon | Portfolio & Lab</title>;