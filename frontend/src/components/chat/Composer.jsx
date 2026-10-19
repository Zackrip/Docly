import React, { useRef, useEffect } from "react";
import ModeChip from "./ModeChip";
import FileChip from "./FileChip";

function Composer({
  question,
  setQuestion,
  onSubmit,
  asking,
  mode,
  setMode,
  attachedFiles,
  onFileSelect,
  onRemoveFile,
  selectedDocumentId,
  selectedDocName,
  onDeselectDocument,
}) {
  const fileInputRef = useRef(null);
  const textareaRef = useRef(null);

  // Auto-resize textarea
  useEffect(() => {
    const el = textareaRef.current;
    if (el) {
      el.style.height = "auto";
      el.style.height = Math.min(el.scrollHeight, 150) + "px";
    }
  }, [question]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSubmit();
    }
  };

  return (
    <div className="border-t border-gray-100 bg-white">
      <div className="max-w-[760px] mx-auto px-4 sm:px-6 py-3">
        {/* Attached file chips */}
        {attachedFiles.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-2">
            {attachedFiles.map((file, idx) => (
              <FileChip
                key={idx}
                file={file}
                onRemove={() => onRemoveFile(idx)}
              />
            ))}
          </div>
        )}

        {/* Selected document indicator */}
        {selectedDocumentId && (
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-md bg-[#FFF0E8] text-[#FF6B35] border border-[#FFD4BE]">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Using: {selectedDocName || "Selected document"}</span>
              <button
                onClick={onDeselectDocument}
                className="ml-1 hover:text-red-500 transition-colors text-xs font-bold"
                aria-label="Deselect document"
              >
                ✕
              </button>
            </span>
          </div>
        )}

        {/* Input row */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
          className="flex items-end gap-2 bg-gray-50 rounded-xl border border-gray-200 focus-within:border-[#FF6B35] focus-within:ring-2 focus-within:ring-[#FF6B35]/10 transition-all px-3 py-2"
        >
          {/* Attach button */}
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="shrink-0 p-1.5 rounded-lg text-gray-500 hover:text-[#FF6B35] hover:bg-[#FFF0E8] transition-colors"
            aria-label="Attach file"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
            </svg>
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.txt"
            multiple
            className="hidden"
            onChange={(e) => {
              onFileSelect(e.target.files);
              e.target.value = "";
            }}
          />

          {/* Mode chip */}
          <ModeChip mode={mode} setMode={setMode} />

          {/* Text input */}
          <textarea
            ref={textareaRef}
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask anything..."
            className="flex-1 bg-transparent text-sm outline-none resize-none min-h-[24px] max-h-[150px] py-1.5 min-w-0 placeholder:text-gray-400"
            rows={1}
            disabled={asking}
          />

          {/* Send button */}
          <button
            type="submit"
            disabled={asking || (!question.trim() && attachedFiles.length === 0)}
            className="shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-[#FF6B35] text-white disabled:opacity-30 hover:bg-[#e85b27] transition-colors"
            aria-label="Send message"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
              />
            </svg>
          </button>
        </form>

        <p className="text-[10px] text-gray-400 text-center mt-2">
          Docly can make mistakes. Verify important information.
        </p>
      </div>
    </div>
  );
}

export default Composer;
