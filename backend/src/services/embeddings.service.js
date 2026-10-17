import llm from "../configs/llm.js";

const generateEmbeddings = async (documents) => {
  const texts = documents.map((doc) => doc.pageContent);

  const embeddings = await llm.embeddings.embedDocuments(texts);

  return embeddings;
};

  export default generateEmbeddings;