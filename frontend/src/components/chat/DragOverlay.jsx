import React from "react";

function DragOverlay() {
  return (
    <div className="fixed inset-0 z-50 bg-[#FF6B35]/10 border-2 border-dashed border-[#FF6B35] flex items-center justify-center pointer-events-none">
      <div className="bg-white px-8 py-6 rounded-2xl shadow-xl text-center">
        <div className="w-10 h-10 rounded-full bg-orange-50 text-[#FF6B35] flex items-center justify-center mx-auto mb-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
          </svg>
        </div>
        <p className="text-lg font-semibold text-[#FF6B35]">
          Drop files here
        </p>
        <p className="text-xs text-gray-500 mt-1">PDF or TXT</p>
      </div>
    </div>
  );
}

export default DragOverlay;
