import React from "react";

const FEATURES = [
  {
    icon: (
      <svg className="w-5 h-5 text-[#FF6B35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Document Grounding",
    description: "Upload PDFs or text files. Docly slices them into semantic chunks and stores embeddings in Qdrant for page-accurate retrieval.",
    badge: "Vector RAG",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-[#FF6B35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    title: "Autonomous Web Routing",
    description: "No document attached or asking for current data? Docly automatically routes your prompt to live web search without manual switching.",
    badge: "Smart Fallback",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-[#FF6B35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    title: "4-Way Mode Control",
    description: "Switch between Auto (intelligent intent detection), Documents-only, Web-only, or General discussion directly inside the composer.",
    badge: "Mode Selector",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-[#FF6B35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "Citations & Evidence Badges",
    description: "Every answer lists source chips (e.g. report.pdf p.4 or reuters.com) and displays an explicit 'Used: Documents · Web' badge.",
    badge: "Transparency",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-[#FF6B35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    ),
    title: "Global Drag-and-Drop",
    description: "Drop files anywhere on the page to immediately attach them as document chips in your composer. Zero clunky upload popups.",
    badge: "Fast Upload",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-[#FF6B35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Private & Secure Architecture",
    description: "Each vector embedding and chat thread is strictly keyed to your authenticated account ID. Your private data stays private.",
    badge: "Security",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Attach or Ask Directly",
    desc: "Attach a file via the clip button, drop a PDF on the page, or simply ask a question to query web intelligence.",
  },
  {
    num: "02",
    title: "Smart Semantic Retrieval",
    desc: "Docly's router categorizes intent, querying Qdrant vector points or verified live search to fetch authoritative context.",
  },
  {
    num: "03",
    title: "Answers with Source Links",
    desc: "Receive clear, structured markdown answers with interactive source citations and a 1-click copy button.",
  },
];

function About() {
  return (
    <div className="w-full bg-white text-gray-900 py-16 sm:py-24">
      {/* ─── Bento Grid Features Section ──────────────────────────────── */}
      <section id="features" className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest text-[#FF6B35] uppercase bg-orange-50 px-2.5 py-1 rounded border border-orange-100">
            Why Docly
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-gray-900 mt-3">
            Engineered for reliable document intelligence
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600">
            Built on a Retrieval-Augmented Generation foundation to eliminate hallucinations and give you verifiable answers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── How It Works Section ───────────────────────────────────────── */}
      <section id="how-it-works" className="mt-20 max-w-6xl mx-auto px-5 sm:px-8">
        <div className="bg-gray-900 rounded-2xl p-8 sm:p-12 text-white">
          <div className="max-w-xl mb-10">
            <span className="text-xs font-bold tracking-widest text-[#FF6B35] uppercase bg-white/10 px-2.5 py-1 rounded border border-white/10">
              Workflow
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-3">
              From raw documents to answers in three steps
            </h2>
            <p className="mt-2 text-gray-400 text-xs sm:text-sm">
              No complex pipelines. Just upload, query, and discover.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STEPS.map((s, idx) => (
              <div
                key={idx}
                className="bg-gray-800/80 border border-gray-700/80 rounded-xl p-5 sm:p-6"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-[#FF6B35] font-mono mb-2">
                  {s.num}
                </div>
                <h3 className="text-sm font-bold text-white mb-1.5">{s.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Architecture FAQ Section ──────────────────────────────────── */}
      <section id="about" className="mt-20 max-w-5xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold tracking-widest text-[#FF6B35] uppercase bg-orange-50 px-2.5 py-1 rounded border border-orange-100">
            Architecture
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 mt-2">
            Built on a resilient RAG foundation
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl bg-gray-50 border border-gray-200">
            <h4 className="font-bold text-gray-900 text-sm mb-1.5">
              How does Docly prevent hallucinations?
            </h4>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Docly enforces strict grounded prompts. If a question refers to your document, the LLM is constrained to cite specific paragraphs and return source evidence instead of guessing.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-gray-50 border border-gray-200">
            <h4 className="font-bold text-gray-900 text-sm mb-1.5">
              What happens if my file is missing data?
            </h4>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Our autonomous query router detects freshness and outside knowledge cues. It enriches the answer with real-time web citations, labeled with Used: Documents · Web.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-gray-50 border border-gray-200">
            <h4 className="font-bold text-gray-900 text-sm mb-1.5">
              What formats are supported?
            </h4>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              We natively parse PDF documents and TXT files, extracting structure, headers, and semantic sections into vector points automatically.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-gray-50 border border-gray-200">
            <h4 className="font-bold text-gray-900 text-sm mb-1.5">
              Is my document data private?
            </h4>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Yes. Vector collections are partitioned by user ID. Other users cannot access, query, or infer information from your uploaded files.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
