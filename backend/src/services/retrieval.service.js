import ollama from "../configs/ollama.js";
import qdrantClient from "../configs/qdrant.js";
import ensureDocumentIndexes from "./qdrant-index.service.js";

const COLLECTION_NAME = "documents";

const createQueryEmbedding = async (text) => {
  const vector = await ollama.embeddings.embedQuery(text);

  if (!vector?.length) {
    throw new Error("Ollama returned an empty query embedding");
  }

  return vector;
};

const searchVectorStore = async (query, k = 5, options = {}) => {
  const { userId, documentId } = options;

  if (!query?.trim()) {
    throw new Error("Search query cannot be empty.");
  }

  // Require an authenticated user's ID for private document retrieval.
  if (!userId) {
    throw new Error("userId is required for document retrieval.");
  }

  const queryVector = await createQueryEmbedding(query);
  await ensureDocumentIndexes();

  const must = [
    {
      key: "metadata.userId",
      match: { value: userId },
    },
  ];

  // Restrict retrieval to a particular document when selected.
  if (documentId) {
    must.push({
      key: "metadata.documentId",
      match: { value: documentId },
    });
  }

  const result = await qdrantClient.query(COLLECTION_NAME, {
    query: queryVector,
    limit: k,
    with_payload: true,
    filter: {
      must,
    },
  });

  return (result.points ?? [])
    .filter((point) => point.payload?.pageContent?.trim())
    .map((point) => ({
      pageContent: point.payload.pageContent,
      metadata: point.payload?.metadata ?? {},
      score: point.score,
    }));
};

export default {
  searchVectorStore,
};
