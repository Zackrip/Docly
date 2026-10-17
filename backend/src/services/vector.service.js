import ollama from "../configs/ollama.js";
import qdrantClient from "../configs/qdrant.js";
import dotenv from "dotenv";
import crypto from "crypto";
import ensureDocumentIndexes from "./qdrant-index.service.js";

dotenv.config();

const COLLECTION_NAME = "documents";
const VECTOR_SIZE = 768;
const createVectorStore = async (documents) => {
  // Check whether collection exists
  const collections = await qdrantClient.getCollections();

  const collectionExists = collections.collections.some(
    (collection) => collection.name === COLLECTION_NAME,
  );

  if (!collectionExists) {
    await qdrantClient.createCollection(COLLECTION_NAME, {
      vectors: {
        size: VECTOR_SIZE,
        distance: "Cosine",
      },
    });
  }

  // Qdrant Cloud requires indexes for filtered UUID payload fields.
  await ensureDocumentIndexes();

  // Get all chunk texts
  const texts = documents.map((document) => document.pageContent);

  console.log("Embedding chunks:", texts.length);

  // Embed ALL chunks in one call
  const vectors = await ollama.embeddings.embedDocuments(texts);

  console.log("Embeddings received:", vectors.length);
  console.log("Vector dimension:", vectors[0]?.length);

  if (!vectors?.length) {
    throw new Error("Ollama returned empty embeddings");
  }

  // Create Qdrant points
  const points = documents.map((document, index) => ({
    id: crypto.randomUUID(),

    vector: vectors[index],

    payload: {
      pageContent: document.pageContent,

      metadata: {
        ...document.metadata,
        userId: document.metadata.userId,
        documentId: document.metadata.documentId,
        filename: document.metadata.filename,
        chunkIndex: index,
      },
    },
  }));

  // Store all points
  await qdrantClient.upsert(COLLECTION_NAME, {
    wait: true,
    points,
  });

  console.log("Points stored:", points.length);

  return {
    collectionName: COLLECTION_NAME,
    pointsStored: points.length,
  };
};

export default createVectorStore;
