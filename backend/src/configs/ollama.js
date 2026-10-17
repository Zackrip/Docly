import ollama from "ollama";
import llm from "./llm.js";

// Embeddings
const embeddings = {
  embedQuery: async (text) => {
    const response = await ollama.embed({
      model: process.env.OLLAMA_EMBEDDING_MODEL,
      input: text,
    });

    return response.embeddings[0];
  },

  embedDocuments: async (texts) => {
    const response = await ollama.embed({
      model: process.env.OLLAMA_EMBEDDING_MODEL,
      input: texts,
    });

    return response.embeddings;
  },
};

export default {
  embeddings,
};