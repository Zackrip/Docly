import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

function MessageBubble({ message, onSourceClick }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(message.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  if (message.from === "you") {
    return (
      <div className="flex justify-end">
        <div className="max-w-[85%] sm:max-w-[75%] text-sm rounded-xl px-4 py-2.5 bg-[#FF6B35] text-white whitespace-pre-wrap">
          <ReactMarkdown>{message.text}</ReactMarkdown>
        </div>
      </div>
    );
  }

  // AI message
  return (
    <div className="flex justify-start">
      <div className="max-w-[85%] sm:max-w-[75%]">
        <div className="text-sm rounded-xl px-4 py-3 bg-white text-gray-800 whitespace-pre-wrap border border-gray-200 shadow-xs">
          <ReactMarkdown>{message.text}</ReactMarkdown>
        </div>

        {/* Per-answer extras */}
        <div className="flex flex-wrap items-center gap-2 mt-2">
          {/* Source chips */}
          {message.sources?.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {message.sources.map((src) => (
                <button
                  key={src.id}
                  type="button"
                  onClick={() => onSourceClick?.(src)}
                  className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 transition-colors"
                >
                  📄 {src.id} · {src.filename || "Document"}
                </button>
              ))}
            </div>
          )}

          {/* Mode badge */}
          {message.mode && (
            <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 border border-gray-200">
              Used:{" "}
              {message.mode === "document"
                ? "Documents"
                : message.mode === "web"
                  ? "Web"
                  : message.mode === "document_web"
                    ? "Documents · Web"
                    : "General"}
            </span>
          )}

          {/* Copy button */}
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Copy answer"
          >
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            <span>{copied ? "Copied" : "Copy"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MessageBubble;
