import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import multer from "multer";
import path from "path";
import userRouter from "./routes/userRoutes.js";
import errorHandlerMiddleware from "./middelware/errorHandler.js";
import userInteractionRoutes from "./routes/userInteractionRoutes.js";
import RecipeRoutes from "./routes/recipeRoutes.js";
import userPreferenceRoutes from "./routes/plannedRecipeRoutes.js";
import userNutritionRoutes from "./routes/nutritionHistoryRoutes.js";
import useMealsRoutes from "./routes/mealPlanRoutes.js";
import CommentRoutes from "./routes/commentRoutes.js";
const app = express();
const port = 3000;

//middelwares
app.use(express.json());
app.use(cors());
app.use("/images", express.static("./upload/images"));
// handel image upload to local storage
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

//routes
app.get("/", (req, res) => {
  res.send("Welcome to Nutration API");
});
app.use("/api/user", userRouter);
app.use("/api/userinteraction", userInteractionRoutes);
app.use("/api/recipe", RecipeRoutes);
app.use("/api/userpreference", userPreferenceRoutes);
app.use("/api/usernutrition", userNutritionRoutes);
app.use("/api/usermeal", useMealsRoutes);
app.use("/api/comment", CommentRoutes);

//app routes
app.use(multer({ storage: storage }).single("productImage"));
app.use("*", (req, res) => {
  return res.status(404).json({ message: "route not exist" });
});
app.use(errorHandlerMiddleware);

app.listen(port, async () => {
  //DataBase conncection with MongoDB
  await mongoose.connect(
    "mongodb+srv://zain:zain12345@cluster0.nmh90tv.mongodb.net/"
  ).then(() => {
    console.log("Database connected");
  }).catch((error) => {
    console.log("error", error);
  }
  );
  console.log(`Example app listening at http://localhost:${port}`);
  
});

//zain12345