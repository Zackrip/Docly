import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full bg-[#111827] text-white border-t border-gray-800">
      {/* Top section - Links */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-16 pb-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand identity */}
        <div className="md:col-span-1">
          <Link to="/" className="flex items-center gap-2.5 mb-4 group">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#FF6B35] to-[#FF8C61] flex items-center justify-center text-white shadow-md shadow-[#FF6B35]/20">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              Doc<span className="text-[#FF6B35]">ly</span>
            </span>
          </Link>
          <p className="text-xs text-gray-400 leading-relaxed">
            AI document reader & knowledge assistant powered by semantic vector retrieval and autonomous web routing.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Systems Operational
          </div>
        </div>

        {/* Explore */}
        <div>
          <p className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-4">
            Product
          </p>
          <ul className="space-y-2.5 text-sm text-gray-400">
            <li>
              <a href="#features" className="hover:text-[#FF6B35] transition-colors">
                Features & RAG
              </a>
            </li>
            <li>
              <a href="#how-it-works" className="hover:text-[#FF6B35] transition-colors">
                How It Works
              </a>
            </li>
            <li>
              <Link to="/ask-docly" className="hover:text-[#FF6B35] transition-colors">
                Chat Workspace
              </Link>
            </li>
            <li>
              <a href="#about" className="hover:text-[#FF6B35] transition-colors">
                Architecture FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Connect & Community */}
        <div>
          <p className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-4">
            Connect
          </p>
          <ul className="space-y-2.5 text-sm text-gray-400">
            <li>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-[#FF6B35] transition-colors">
                GitHub Repository
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-[#FF6B35] transition-colors">
                X / Twitter
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#FF6B35] transition-colors">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <p className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-4">
            Contact
          </p>
          <a
            href="mailto:hello@docly.ai"
            className="text-sm text-gray-400 hover:text-[#FF6B35] transition-colors block"
          >
            hello@docly.ai
          </a>
          <p className="text-xs text-gray-500 mt-4 leading-relaxed">
            Built with Retrieval-Augmented Generation (Qdrant + LLM Embeddings)
          </p>
        </div>
      </div>

      {/* Big brand text - faded ghost style */}
      <div className="pb-6 relative overflow-hidden select-none pointer-events-none">
        <h1 className="text-[16vw] font-bold text-white/5 tracking-tighter leading-[0.85] uppercase text-center">
          Docly
        </h1>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 border-t border-gray-800/80 text-xs text-gray-500">
        <div className="flex gap-6">
          <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
        </div>
        <p>© 2026 Docly. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
