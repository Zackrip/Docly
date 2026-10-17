import { ChatOllama } from "@langchain/ollama";

import dotenv from "dotenv";

dotenv.config();

const llm = new ChatOllama({
  model: process.env.OLLAMA_LLM_MODEL || "qwen3.5:0.8b",
  temperature: 0,
  baseUrl: process.env.OLLAMA_BASE_URL || "http://127.0.0.1:11434",
  numPredict: 256,
  think: false,
});

export default {
  llm,
};
