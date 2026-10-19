import React from "react";

const CAPABILITIES = [
  "Qdrant Vector Database",
  "Page-Accurate Citations",
  "Autonomous Web Fallback",
  "Multi-Format (PDF & TXT)",
  "Zero Hallucination Guardrails",
  "Markdown & Code Support",
  "User-Scoped Embeddings",
  "Instant Semantic Retrieval",
];

function Marquee() {
  return (
    <div className="w-full py-4 bg-gray-900 border-y border-gray-800 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs text-gray-300 font-medium">
          {CAPABILITIES.map((cap, i) => (
            <span
              key={i}
              className="inline-flex items-center px-3 py-1 rounded-md bg-gray-800/80 border border-gray-700/60"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35] mr-2 shrink-0" />
              {cap}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Marquee;
