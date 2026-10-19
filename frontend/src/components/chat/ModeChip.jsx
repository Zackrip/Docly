import React, { useState, useRef, useEffect } from "react";

const MODES = [
  { key: "auto", label: "Auto" },
  { key: "document", label: "Documents" },
  { key: "web", label: "Web" },
  { key: "general", label: "General" },
];

function ModeChip({ mode, setMode }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const current = MODES.find((m) => m.key === mode) || MODES[0];

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-md border border-gray-200 bg-gray-50 hover:bg-gray-100 text-gray-700 transition-colors whitespace-nowrap font-medium"
        aria-label="Select mode"
      >
        <span>{current.label}</span>
        <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute bottom-full left-0 mb-1 w-36 bg-white border border-gray-200 rounded-lg shadow-md py-1 z-50">
          {MODES.map((m) => (
            <button
              key={m.key}
              type="button"
              onClick={() => {
                setMode(m.key);
                setOpen(false);
              }}
              className={`w-full text-left px-3 py-1.5 text-xs font-medium transition-colors ${
                m.key === mode
                  ? "bg-[#FFF0E8] text-[#FF6B35]"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default ModeChip;
