import llm from "../configs/llm.js";
import generateDocumentAnswer from "./rag.service.js";
import { routeQuery } from "./queryRouter.service.js";

const generateGeneralAnswer = async (question) => {
  const prompt = `
You are Docly, an AI assistant.

Instructions:
- Your name is Docly.
- Answer the user's question directly and naturally.
- Understand the intent behind the question.
- Explain concepts clearly and provide examples when helpful.
- Use Markdown formatting when appropriate.
- For greetings and casual conversation, respond naturally.
- For coding questions, provide correct code and explain it when useful.
- Do not invent facts.
- If you are uncertain, acknowledge the uncertainty.
- Do not claim to have searched the web or read a document unless you actually have.

User question:
${question}

Answer:
`.trim();

  const response = await llm.llm.invoke(prompt);

  const answer =
    typeof response.content === "string" ? response.content.trim() : "";

  if (!answer) {
    throw new Error("The AI model returned an empty response.");
  }

  return answer;
};

const answerQuestion = async (question, options = {}) => {
  const { userId, documentId, enrichDocument = false } = options;

  const mode = routeQuery({
    question,
    documentSelected: Boolean(documentId),
    enrichDocument,
  });

  switch (mode) {
    case "general":
      return {
        mode,
        answer: await generateGeneralAnswer(question),
      };

    case "document":
      if (!documentId) {
        throw new Error(
          "Select a document to ask document-specific questions.",
        );
      }

      if (!userId) {
        throw new Error("Authentication is required.");
      }

      return {
        mode,
        answer: await generateDocumentAnswer(question, {
          userId,
          documentId,
        }),
      };

    case "web":
      throw new Error("Web search mode has not been implemented yet.");

    case "document_web":
      throw new Error(
        "Document and web search mode has not been implemented yet.",
      );

    default:
      throw new Error(`Unsupported query mode: ${mode}`);
  }
};

export default answerQuestion;
