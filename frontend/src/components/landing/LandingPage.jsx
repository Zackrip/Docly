import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#FF6B35] text-xs font-semibold mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]" />
            <span>Ask your documents. Fall back to the web.</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.15]">
            Chat with your documents.{" "}
            <span className="text-[#FF6B35]">Verified answers</span> in seconds.
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            Upload PDFs or notes and ask in plain language. Every answer links back to its source. 
            If your files don’t have it, Docly searches the web.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              to="/ask-docly"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#FF6B35] text-white text-sm font-semibold hover:bg-[#e85b27] transition-colors"
            >
              <span>Start Asking Free</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <a
              href="#how-it-works"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200 text-sm font-semibold transition-colors"
            >
              <span>See How It Works</span>
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>

          {/* Capability highlights */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-500 font-medium">
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-[#FF6B35]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              No credit card required
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-[#FF6B35]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              PDF and TXT support
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-[#FF6B35]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Accurate page citations
            </span>
          </div>
        </div>

        {/* Live Interface Mockup (Zero-lag, clean CSS) */}
        <div className="mt-12 max-w-4xl mx-auto rounded-xl bg-white shadow-lg border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-100 bg-gray-50/90 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span className="ml-2 font-medium text-gray-600">Docly Workspace Preview</span>
            </div>
            <span className="text-[11px] font-mono text-[#FF6B35] font-semibold bg-orange-50 px-2 py-0.5 rounded border border-orange-100">
              Your documents stay private
            </span>
          </div>

          {/* Mock content */}
          <div className="grid grid-cols-1 md:grid-cols-12 min-h-[380px] bg-[#FAFAFA]">
            {/* Sidebar Preview */}
            <div className="hidden md:block md:col-span-4 bg-white border-r border-gray-100 p-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-bold text-[#FF6B35]">Docly</span>
                <span className="text-[11px] bg-[#FF6B35] text-white px-2 py-0.5 rounded font-medium">
                  + New Chat
                </span>
              </div>
              <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Recent Chats
              </div>
              <div className="bg-[#FFF0E8] text-[#FF6B35] font-medium text-xs px-2.5 py-1.5 rounded-lg mb-1 truncate">
                Q3 Financial Highlights
              </div>
              <div className="text-gray-500 text-xs px-2.5 py-1.5 rounded-lg truncate">
                Architecture Review
              </div>

              <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mt-5 mb-2">
                Documents
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-700 bg-gray-50 px-2.5 py-1.5 rounded-lg border border-gray-100 mb-1">
                <svg className="w-3.5 h-3.5 text-gray-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="truncate font-medium">report.pdf</span>
              </div>
            </div>

            {/* Main Chat Column */}
            <div className="col-span-12 md:col-span-8 flex flex-col justify-between p-4 sm:p-5">
              <div className="space-y-3.5">
                {/* User message */}
                <div className="flex justify-end">
                  <div className="max-w-[85%] text-xs sm:text-sm rounded-xl px-3.5 py-2 bg-[#FF6B35] text-white">
                    What are the Q3 financial highlights, and how do they compare with consensus?
                  </div>
                </div>

                {/* AI response */}
                <div className="flex justify-start">
                  <div className="max-w-[90%] sm:max-w-[85%]">
                    <div className="text-xs sm:text-sm rounded-xl px-3.5 py-2.5 bg-white text-gray-800 border border-gray-200 space-y-1.5">
                      <p className="font-semibold text-gray-900">Summary of Q3 Results:</p>
                      <ul className="list-disc pl-4 space-y-1 text-gray-700">
                        <li><strong>Revenue:</strong> $48.2M (+27% YoY).</li>
                        <li><strong>Operating Margin:</strong> 31.4% vs 26.1% prior quarter.</li>
                        <li><strong>Consensus:</strong> Exceeded Wall Street estimates ($46.5M) by +3.6%.</li>
                      </ul>
                    </div>

                    {/* Source chips */}
                    <div className="flex flex-wrap items-center gap-1.5 mt-2">
                      <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100 font-medium">
                        [1] report.pdf p.14
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 font-medium">
                        [W1] reuters.com
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 border border-gray-200">
                        Used: Documents · Web
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Composer mockup */}
              <div className="mt-5 pt-3 border-t border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 text-xs px-2 py-0.5 rounded bg-[#FFF0E8] text-[#FF6B35] font-medium border border-orange-200">
                    <span>report.pdf</span>
                    <span className="text-xs opacity-60">✕</span>
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white rounded-lg border border-gray-200 px-3 py-2">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                  </svg>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-gray-100 text-gray-600 font-medium">
                    Auto ▾
                  </span>
                  <input
                    type="text"
                    readOnly
                    value="Ask follow-up question..."
                    className="flex-1 bg-transparent text-xs text-gray-400 outline-none"
                  />
                  <div className="w-6 h-6 rounded bg-[#FF6B35] text-white flex items-center justify-center">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
