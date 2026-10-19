import React from "react";

function ThinkingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="text-sm rounded-2xl rounded-bl-md px-4 py-3 bg-gray-50 text-gray-400 border border-gray-100 flex items-center gap-2">
        <span className="flex gap-1">
          <span className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full animate-bounce [animation-delay:0ms]" />
          <span className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full animate-bounce [animation-delay:150ms]" />
          <span className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full animate-bounce [animation-delay:300ms]" />
        </span>
        Thinking...
      </div>
    </div>
  );
}

export default ThinkingIndicator;
