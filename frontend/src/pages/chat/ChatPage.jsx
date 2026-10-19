import React, { useState, useRef, useEffect, useCallback } from "react";
import api from "../../services/api.js";

import Sidebar from "../../components/chat/Sidebar";
import MobileHeader from "../../components/chat/MobileHeader";
import EmptyState from "../../components/chat/EmptyState";
import MessageBubble from "../../components/chat/MessageBubble";
import ThinkingIndicator from "../../components/chat/ThinkingIndicator";
import Composer from "../../components/chat/Composer";
import DragOverlay from "../../components/chat/DragOverlay";

function ChatPage() {
  // Sidebar state
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [documents, setDocuments] = useState([]);
  const [selectedDocumentId, setSelectedDocumentId] = useState(null);

  const [selectedSource, setSelectedSource] = useState(null);

  // Chat sessions
  const [chatSessions, setChatSessions] = useState([
    { title: "New Chat", messages: [] },
  ]);
  const [activeChatIdx, setActiveChatIdx] = useState(0);

  // Current chat
  const messages = chatSessions[activeChatIdx]?.messages || [];

  // Composer state
  const [question, setQuestion] = useState("");
  const [asking, setAsking] = useState(false);
  const [mode, setMode] = useState("auto");
  const [attachedFiles, setAttachedFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  // Drag-and-drop state
  const [dragging, setDragging] = useState(false);

  // Refs
  const chatEnd = useRef(null);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    chatEnd.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Fetch documents on mount
  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const res = await api.get("/documents");
        if (res.data.success) {
          setDocuments(res.data.data);
        }
      } catch (err) {
        console.error("Failed to fetch documents:", err);
      }
    };
    fetchDocuments();
  }, []);

  // ── Sidebar handlers ──

  const handleNewChat = () => {
    setChatSessions((prev) => [...prev, { title: "New Chat", messages: [] }]);
    setActiveChatIdx(chatSessions.length);
    setAttachedFiles([]);
    setSidebarOpen(false);
  };

  const handleSelectChat = (idx) => {
    setActiveChatIdx(idx);
    setAttachedFiles([]);
    setSidebarOpen(false);
  };

  const handleSelectDocument = (docId) => {
    setSelectedDocumentId((prev) => (prev === docId ? null : docId));
  };

  // ── File handlers ──

  const handleFileSelect = useCallback((files) => {
    if (!files || files.length === 0) return;
    const newFiles = Array.from(files);
    setAttachedFiles((prev) => [...prev, ...newFiles]);
  }, []);

  const handleRemoveFile = (idx) => {
    setAttachedFiles((prev) => prev.filter((_, i) => i !== idx));
  };

  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("document", file);

    const res = await api.post("/documents/upload", formData);
    const documentId = res.data.data.documentId;

    if (!documentId) {
      throw new Error("Upload succeeded, but no document ID was returned.");
    }

    // Add document to sidebar list
    setDocuments((prev) => [
      {
        id: documentId,
        fileName: res.data.data.fileName,
        fileType: res.data.data.fileType,
        status: "processed",
      },
      ...prev,
    ]);

    return documentId;
  };

  // ── Chat handler ──

  const handleAsk = async () => {
    const q = question.trim();
    if (!q || asking) return;

    setQuestion("");
    setAsking(true);

    // Add user message
    const userMsg = { from: "you", text: q };
    setChatSessions((prev) => {
      const updated = [...prev];
      updated[activeChatIdx] = {
        ...updated[activeChatIdx],
        messages: [...updated[activeChatIdx].messages, userMsg],
        title:
          updated[activeChatIdx].messages.length === 0
            ? q.slice(0, 40)
            : updated[activeChatIdx].title,
      };
      return updated;
    });

    try {
      // Upload any attached files first
      let docId = selectedDocumentId;
      if (attachedFiles.length > 0) {
        setUploading(true);
        for (const file of attachedFiles) {
          docId = await uploadFile(file);
        }
        setSelectedDocumentId(docId);
        setAttachedFiles([]);
        setUploading(false);
      }

      // Determine the mode to send
      let requestMode = mode;
      if (mode === "auto") {
        requestMode = undefined; // let backend decide
      }

      const res = await api.post("/chat", {
        question: q,
        documentId: docId,
        mode: requestMode,
      });

      const aiMsg = {
        from: "ai",
        text: res.data.answer,
        mode: res.data.mode,
        sources: res.data.sources || [],
      };

      setChatSessions((prev) => {
        const updated = [...prev];
        updated[activeChatIdx] = {
          ...updated[activeChatIdx],
          messages: [...updated[activeChatIdx].messages, aiMsg],
        };
        return updated;
      });
    } catch (err) {
      const errMsg = {
        from: "ai",
        text:
          "Error: " +
          (err.response?.data?.message ||
            err.message ||
            "Something went wrong"),
        mode: "error",
      };

      setChatSessions((prev) => {
        const updated = [...prev];
        updated[activeChatIdx] = {
          ...updated[activeChatIdx],
          messages: [...updated[activeChatIdx].messages, errMsg],
        };
        return updated;
      });
    } finally {
      setAsking(false);
      setUploading(false);
    }
  };

  const handleSuggestionClick = (text) => {
    setQuestion(text);
  };

  // ── Drag-and-drop ──

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setDragging(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    if (e.currentTarget.contains(e.relatedTarget)) return;
    setDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      setDragging(false);
      const files = e.dataTransfer.files;
      if (files.length > 0) {
        handleFileSelect(files);
      }
    },
    [handleFileSelect],
  );

  // ── Derived values ──

  const selectedDocName =
    documents.find((d) => d.id === selectedDocumentId)?.fileName || null;

  // ── Render ──

  return (
    <div
      className="flex h-screen bg-[#FAFAFA] overflow-hidden"
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {dragging && <DragOverlay />}

      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        chats={chatSessions}
        activeChatIdx={activeChatIdx}
        onSelectChat={handleSelectChat}
        onNewChat={handleNewChat}
        documents={documents}
        onSelectDocument={handleSelectDocument}
        selectedDocId={selectedDocumentId}
      />

      <div className="flex-1 flex flex-col min-w-0">
        <MobileHeader onOpenSidebar={() => setSidebarOpen(true)} />

        {/* Chat messages — centered column */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-[760px] mx-auto px-4 sm:px-6 py-6">
            {messages.length === 0 ? (
              <EmptyState onSuggestionClick={handleSuggestionClick} />
            ) : (
              <div className="space-y-5">
                {messages.map((m, i) => (
                  <MessageBubble
                    key={i}
                    message={m}
                    onSourceClick={setSelectedSource}
                  />
                ))}
                {(asking || uploading) && <ThinkingIndicator />}
                <div ref={chatEnd} />
              </div>
            )}
          </div>
        </div>

        <Composer
          question={question}
          setQuestion={setQuestion}
          onSubmit={handleAsk}
          asking={asking}
          mode={mode}
          setMode={setMode}
          attachedFiles={attachedFiles}
          onFileSelect={handleFileSelect}
          onRemoveFile={handleRemoveFile}
          selectedDocumentId={selectedDocumentId}
          selectedDocName={selectedDocName}
          onDeselectDocument={() => setSelectedDocumentId(null)}
        />
        {selectedSource && (
          <div className="fixed inset-0 z-50 flex justify-end">
            {/* Backdrop */}
            <button
              type="button"
              aria-label="Close source preview"
              onClick={() => setSelectedSource(null)}
              className="absolute inset-0 bg-black/20"
            />

            {/* Source panel */}
            <aside className="relative z-10 w-full max-w-md h-full bg-white shadow-xl border-l border-gray-200 flex flex-col">
              <div className="flex items-start justify-between p-5 border-b border-gray-200">
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    Source [{selectedSource.id}]
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    {selectedSource.filename || "Document"}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedSource(null)}
                  aria-label="Close source panel"
                  className="text-gray-500 hover:text-gray-900 text-2xl leading-none"
                >
                  &times;
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-5">
                <div className="text-sm text-gray-700 leading-7 whitespace-pre-wrap">
                  {selectedSource.content}
                </div>
              </div>

              {selectedSource.page != null && (
                <div className="p-4 border-t border-gray-200 text-sm text-gray-500">
                  Page {selectedSource.page}
                </div>
              )}
            </aside>
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatPage;
