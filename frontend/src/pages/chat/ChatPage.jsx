import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api.js";
import ReactMarkdown from "react-markdown";

function ChatPage() {
  const [file, setFile] = useState(null);
  const [uploadMsg, setUploadMsg] = useState("");
  const [uploading, setUploading] = useState(false);

  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [asking, setAsking] = useState(false);

  const [selectedDocumentId, setSelectedDocumentId] = useState(null);

  const chatEnd = useRef(null);

  useEffect(() => {
    chatEnd.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleUpload = async () => {
    if (!file || uploading) return;

    setUploading(true);
    setUploadMsg("");

    const formData = new FormData();
    formData.append("document", file);

    try {
      const res = await api.post("/documents/upload", formData);

      const documentId = res.data.data.documentId;

      if (!documentId) {
        throw new Error("Upload succeeded, but no document ID was returned.");
      }

      setSelectedDocumentId(documentId);

      setUploadMsg(
        `${res.data.data.fileName} uploaded (${res.data.data.chunkCount} chunks)`,
      );

      setFile(null);
    } catch (err) {
      setUploadMsg(
        err.response?.data?.message || err.message || "Upload failed",
      );
    } finally {
      setUploading(false);
    }
  };

  const handleAsk = async (e) => {
    e.preventDefault();

    if (!question.trim() || asking) return;

    const q = question.trim();

    setQuestion("");
    setMessages((m) => [...m, { from: "you", text: q }]);
    setAsking(true);

    try {
      const res = await api.post("/chat", {
        question: q,
        documentId: selectedDocumentId,
      });

      setMessages((m) => [...m, { from: "ai", text: res.data.answer }]);
    } catch (err) {
      setMessages((m) => [
        ...m,
        {
          from: "ai",
          text:
            "Error: " + (err.response?.data?.message || "Something went wrong"),
        },
      ]);
    } finally {
      setAsking(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] p-4 sm:p-6 font-sans">
      <Link to="/" className="text-[#FF6B35] mb-4 inline-block">
        <h1 className="text-2xl text-[#FF6B35] font-bold mb-6">Docly</h1>
      </Link>

      {/* Upload */}
      <div className="bg-white rounded-lg p-4 sm:p-5 mb-6 shadow-sm">
        <h2 className="font-semibold text-[#FF6B35] mb-3">Upload Document</h2>
        <div className="flex flex-wrap gap-3 items-center">
          <input
            type="file"
            accept=".pdf,.txt"
            onChange={(e) => setFile(e.target.files[0])}
            className="text-sm flex-1 min-w-0"
          />
          <button
            onClick={handleUpload}
            disabled={!file || uploading}
            className="bg-[#FF6B35] text-white text-sm px-4 py-2 rounded disabled:opacity-40 whitespace-nowrap"
          >
            {uploading ? "Uploading..." : "Upload"}
          </button>
        </div>
        {uploadMsg && <p className="text-sm mt-2">{uploadMsg}</p>}
      </div>

      {/* Chat */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-4 border-b border-[#e5e5e5]">
          <h2 className="font-semibold text-[#FF6B35]">Ask a Question</h2>
        </div>

        <div className="h-64 sm:h-80 overflow-y-auto p-4 space-y-3">
          {messages.length === 0 && (
            <p className="text-gray-400 text-sm text-center mt-16">
              Upload a document, then ask something.
            </p>
          )}
          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex ${m.from === "you" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] sm:max-w-[75%] text-sm rounded-lg px-3 py-2 whitespace-pre-wrap ${
                  m.from === "you"
                    ? "bg-[#FF6B35] text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                <ReactMarkdown>{m.text}</ReactMarkdown>
              </div>
            </div>
          ))}
          {asking && <div className="text-sm text-[#FF6B35]">Thinking...</div>}
          <div ref={chatEnd} />
        </div>

        <form onSubmit={handleAsk} className="flex border-t border-[#e5e5e5]">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Type your question..."
            className="flex-1 px-4 py-3 text-sm outline-none min-w-0"
            disabled={asking}
          />
          <button
            type="submit"
            disabled={asking || !question.trim()}
            className="px-4 sm:px-5 py-3 bg-[#FF6B35] text-white text-sm disabled:opacity-40 whitespace-nowrap"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatPage;
