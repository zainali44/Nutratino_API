import express from "express";

import analysisController from "../controllers/analysisController.js";

const analysisRouter = express.Router();

analysisRouter.get("/analyze", analysisController.getNutrition);

export default analysisRouter;