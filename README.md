# 📄 Docly

### AI-Powered Document Question Answering Platform

Docly is a full-stack AI-powered document question-answering application built using **RAG (Retrieval-Augmented Generation)**.

Users can upload **PDF and TXT documents**, and Docly processes the documents, creates vector embeddings, stores them in a vector database, retrieves relevant information, and generates AI-powered answers based on the uploaded content.

---

## 🚀 Features

### 🔐 Authentication
- User registration and login
- JWT-based authentication
- Protected routes
- Secure authenticated API requests

### 📤 Document Upload
- Upload PDF and TXT documents
- Multipart file upload using Multer
- File validation
- Document processing status

### 📑 Document Processing
- PDF text extraction using `pdf-parse`
- Text chunking using LangChain
- Chunk overlap for better context preservation

### 🧠 AI Embeddings
- Local embeddings using Ollama
- `nomic-embed-text` embedding model
- 768-dimensional vectors
- Batch embedding generation

### 🔎 Semantic Search
- Vector storage using Qdrant
- Cosine similarity search
- Retrieval of relevant document chunks

### 🤖 RAG Question Answering
- Converts user questions into embeddings
- Retrieves relevant document content
- Sends retrieved context to an LLM
- Generates contextual AI answers

### 💬 AI Chat
- Interactive chat interface
- User and AI messages
- Loading states
- Error handling
- Automatic chat scrolling

### 👤 User-Specific Documents
- Documents are associated with authenticated users
- `userId` metadata supports multi-user document isolation

---

## 🏗️ Architecture

```text
                    User
                     │
                     ▼
              React Frontend
                     │
                     ▼
              Node.js + Express
                     │
          ┌──────────┴──────────┐
          │                     │
          ▼                     ▼
    PostgreSQL              Document Upload
          │                     │
          │              PDF / TXT Processing
          │                     │
          │                     ▼
          │                  Chunking
          │                     │
          │                     ▼
          │                  Ollama
          │                     │
          │              Embeddings
          │                     │
          │                     ▼
          │                  Qdrant
          │
          ▼
     Document Metadata


Question
   │
   ▼
Ollama Embedding
   │
   ▼
Qdrant Semantic Search
   │
   ▼
Relevant Document Chunks
   │
   ▼
LLM
   │
   ▼
AI Answer
   │
   ▼
React Chat Interface
