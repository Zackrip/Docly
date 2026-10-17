import qdrantClient from "./src/configs/qdrant.js";

const COLLECTION_NAME = "documents";

try {
  const result = await qdrantClient.deleteCollection(COLLECTION_NAME);
  console.log("Collection deleted:", result);

  await qdrantClient.createCollection(COLLECTION_NAME, {
    vectors: {
      size: 768,
      distance: "Cosine",
    },
  });

  console.log("Collection recreated successfully.");
} catch (error) {
  console.error("Qdrant cleanup failed:", error.message);
} finally {
  await qdrantClient.close();
}