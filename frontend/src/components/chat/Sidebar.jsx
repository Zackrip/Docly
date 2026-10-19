import React from "react";

function Sidebar({
  open,
  onClose,
  chats,
  activeChatIdx,
  onSelectChat,
  onNewChat,
  documents,
  onSelectDocument,
  selectedDocId,
}) {
  return (
    <>
      {/* Backdrop (mobile) */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/30 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed md:sticky top-0 left-0 z-40 h-screen w-72 bg-white border-r border-gray-200 flex flex-col transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Brand + New Chat */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <span className="text-xl font-bold text-[#FF6B35] tracking-tight">
            Docly
          </span>
          <button
            onClick={onNewChat}
            className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#FF6B35] text-white hover:bg-[#e55a2b] transition-colors"
            aria-label="New chat"
          >
            + New Chat
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-6">
          {/* Chat history */}
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
              Chats
            </p>
            {chats.length === 0 && (
              <p className="text-xs text-gray-300 italic">No chats yet</p>
            )}
            <ul className="space-y-1">
              {chats.map((chat, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onSelectChat(idx)}
                    className={`w-full text-left text-sm px-3 py-2 rounded-lg truncate transition-colors ${
                      idx === activeChatIdx
                        ? "bg-[#FFF0E8] text-[#FF6B35] font-medium"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {chat.title || `Chat ${idx + 1}`}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Documents list */}
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
              Documents
            </p>
            {documents.length === 0 && (
              <p className="text-xs text-gray-300 italic">
                No documents uploaded
              </p>
            )}
            <ul className="space-y-1">
              {documents.map((doc) => (
                <li key={doc.id}>
                  <button
                    onClick={() => onSelectDocument(doc.id)}
                    className={`w-full text-left text-sm px-3 py-2 rounded-lg truncate flex items-center gap-2 transition-colors ${
                      doc.id === selectedDocId
                        ? "bg-[#FFF0E8] text-[#FF6B35] font-medium"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <svg
                      className="w-4 h-4 text-gray-400 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <span className="truncate">{doc.fileName}</span>
                    {doc.status === "processing" && (
                      <span className="ml-auto shrink-0 w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section — links replacing landing-page nav */}
        <div className="border-t border-gray-100 px-5 py-3 space-y-1">
          <a
            href="/#features"
            className="block text-xs text-gray-400 hover:text-[#FF6B35] transition-colors"
          >
            Features
          </a>
          <a
            href="/#about"
            className="block text-xs text-gray-400 hover:text-[#FF6B35] transition-colors"
          >
            Architecture
          </a>
          <a
            href="mailto:hello@docly.ai"
            className="block text-xs text-gray-400 hover:text-[#FF6B35] transition-colors"
          >
            Contact
          </a>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
