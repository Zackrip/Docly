import documentService from "../services/document.service.js";
import storeDocuments from "../services/vector.service.js";
import Document from "../models/document.model.js";

const uploadDocument = async (req, res) => {
  let document;

  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Document file is required",
      });
    }

    // 1. Create the PostgreSQL document record.
    document = await Document.create({
      userId: req.user.id,
      fileName: req.file.originalname,
      fileType: req.file.mimetype,
      filePath: req.file.path,
      fileSize: req.file.size,
      status: "processing",
    });

    // 2. Extract text and split it into chunks.
    const result = await documentService.processDocument(req.file);

    // 3. Attach trusted metadata to every chunk.
    const chunksWithMetadata = result.documents.map((chunk) => ({
      ...chunk,
      metadata: {
        ...chunk.metadata,
        userId: req.user.id,
        documentId: document.id,
        filename: document.fileName,
      },
    }));

    // 4. Generate embeddings and store chunks in Qdrant.
    const storageResult = await storeDocuments(chunksWithMetadata);

    // 5. Mark the document as successfully indexed.
    await document.update({ status: "processed" });

    return res.status(201).json({
      success: true,
      message: "Document uploaded and indexed successfully",
      data: {
        documentId: document.id,
        fileName: result.fileName,
        fileType: result.fileType,
        chunkCount: storageResult.pointsStored,
        fileSize: document.fileSize,
      },
    });
  } catch (error) {
    console.error("Document upload failed:", error);

    // Mark the database record as failed if it was created.
    if (document) {
      try {
        await document.update({ status: "failed" });
      } catch (updateError) {
        console.error("Failed to update document status:", updateError);
      }
    }

    return res.status(500).json({
      success: false,
      status: "failed",
      message: "Failed to process document",
      error: error.message,
    });
  }
};

export default {
  uploadDocument,
};