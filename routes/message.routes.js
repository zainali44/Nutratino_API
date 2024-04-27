import express from "express";
import MessageController from "../controllers/message.controller.js";

const router = express.Router();

router.get("/:id", MessageController.getMessages);
router.post("/send/:id", MessageController.sendMessage);


export default router;
 