import chatController from "../controllers/chat.controller.js";
import express from "express";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", authMiddleware, chatController.askQuestion);

export default router;
