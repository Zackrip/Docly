import qdrantClient from "../configs/qdrant.js";

const COLLECTION_NAME = "documents";
const INDEXED_FIELDS = ["metadata.userId", "metadata.documentId"];

const ensureDocumentIndexes = async () => {
  const collection = await qdrantClient.getCollection(COLLECTION_NAME);
  const payloadSchema = collection.payload_schema ?? {};

  for (const field_name of INDEXED_FIELDS) {
    if (payloadSchema[field_name]) continue;

    await qdrantClient.createPayloadIndex(COLLECTION_NAME, {
      field_name,
      field_schema: "uuid",
      wait: true,
    });
  }
};

export default ensureDocumentIndexes;
