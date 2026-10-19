import answerQuestion from "../services/query.service.js";
import Document from "../models/document.model.js";

const askQuestion = async (req, res) => {
  try {
    const { question, documentId } = req.body;
    const userId = req.user.id;

    if (typeof question !== "string" || !question.trim()) {
      return res.status(400).json({
        success: false,
        message: "Question is required",
      });
    }

    // Verify ownership when a document is selected.
    if (documentId) {
      const document = await Document.findOne({
        where: {
          id: documentId,
          userId,
          status: "processed",
        },
      });

      if (!document) {
        return res.status(404).json({
          success: false,
          message: "Document not found or unavailable",
        });
      }
    }

    const result = await answerQuestion(req.body.question, {
      userId: req.user.id,
      documentId: req.body.documentId,
    });

    return res.status(200).json({
      success: true,
      answer: result.answer,
      mode: result.mode ?? "document",
      sources: result.sources ?? [],
    });
  } catch (error) {
    console.error("Chat error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to generate answer",
    });
  }
};

export default {
  askQuestion,
};
