import express from "express";

const router = express.Router();

import exerciseController from "../controllers/exerciseController.js";

router.get("/getexcersie", exerciseController.getExercises);

// Add more routes as needed for updating, deleting, and listing exercises

export default router;