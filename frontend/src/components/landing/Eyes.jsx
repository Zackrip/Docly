import React from "react";
import { Link } from "react-router-dom";

function Eyes() {
  const samplePrompts = [
    "Summarize the key findings in 3 bullet points",
    "What are the main risks outlined in section 4?",
    "Cross-reference this data with the latest industry benchmarks",
  ];

  return (
    <section id="faq" className="w-full py-16 bg-gray-50 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <div className="rounded-2xl bg-gray-900 p-8 sm:p-12 text-white text-center">
          <span className="text-xs font-bold tracking-widest text-[#FF6B35] uppercase bg-white/10 px-2.5 py-1 rounded">
            Start Exploring
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mt-4 text-white">
            Ready to stop searching and start understanding?
          </h2>
          <p className="mt-3 text-gray-300 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
            Drop any PDF or notes file into Docly. Receive immediate, citation-backed answers powered by modern RAG and live web augmentation.
          </p>

          {/* Sample Prompts */}
          <div className="mt-6">
            <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-2.5">
              Sample prompts to try:
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2">
              {samplePrompts.map((prompt, idx) => (
                <div
                  key={idx}
                  className="text-xs bg-gray-800 border border-gray-700 px-3 py-1.5 rounded-lg text-gray-300"
                >
                  "{prompt}"
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 flex justify-center">
            <Link
              to="/ask-docly"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-[#FF6B35] text-white text-sm font-semibold hover:bg-[#e85b27] transition-colors"
            >
              <span>Launch Docly Now</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          <p className="mt-4 text-xs text-gray-400">
            Free to use • No installation • Works in any modern browser
          </p>
        </div>
      </div>
    </section>
  );
}

export default Eyes;