import React from "react";

function MobileHeader({ onOpenSidebar }) {
  return (
    <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100 bg-white md:hidden">
      <button
        onClick={onOpenSidebar}
        className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
        aria-label="Open sidebar"
      >
        <svg
          className="w-5 h-5 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <span className="text-lg font-bold text-[#FF6B35]">Docly</span>
    </div>
  );
}

export default MobileHeader;
