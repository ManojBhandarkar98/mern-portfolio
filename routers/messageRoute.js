import express from "express";
import { getAllMessage, sendMessage } from "../controllers/messageController.js";

const router = express.Router();

router.post("/send", sendMessage);

router.get("/getall", getAllMessage);
export default router;