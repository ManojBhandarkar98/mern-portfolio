import express from "express";
import { deleteMessage, getAllMessage, sendMessage } from "../controllers/messageController.js";

const router = express.Router();

router.post("/send", sendMessage);

router.get("/getall", getAllMessage);

router.delete("/delete",deleteMessage);
export default router;