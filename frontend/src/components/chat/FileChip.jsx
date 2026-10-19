import React from "react";

function FileChip({ file, onRemove }) {
  return (
    <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#FFF0E8] text-[#FF6B35] rounded-md text-xs font-medium border border-[#FFD4BE]">
      <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
      <span className="truncate max-w-[140px]">{file.name}</span>
      <button
        type="button"
        onClick={onRemove}
        className="ml-0.5 hover:text-red-500 transition-colors text-xs font-bold leading-none"
        aria-label={`Remove ${file.name}`}
      >
        ✕
      </button>
    </div>
  );
}

export default FileChip;
