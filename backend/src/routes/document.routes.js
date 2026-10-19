import documentController from "../controllers/document.controller.js";
import express from "express";
import upload from "../middlewares/upload.middleware.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/upload", authMiddleware, upload.single("document"), documentController.uploadDocument);
router.get("/", authMiddleware, documentController.getDocuments);

export default router;