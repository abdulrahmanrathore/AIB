// import connectDB from "./mongodb/connect.js";

import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';
import cors from 'cors';
import express from 'express';
const app = express();
import * as dotenv from "dotenv";
import mongoose from "mongoose";

import auth from './routes/auth.js';
// const userRoute = require("./routes/users");
import user from './routes/users.js';
// const postRoute = require("./routes/posts");
import posts from './routes/posts.js';
// const categoryRoute = require("./routes/categories");
import categories from './routes/categories.js';
// const multer = require("multer");
import multer from 'multer';
// const path = require("path");
import path from 'path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();
app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use("/images", express.static(path.join(__dirname,"/images")))


mongoose
.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  
})
.then(console.log("Connnected to MongoDB"))
.catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination:(req, file,cb) => {
    cb(null,"images")
  }, filename:(req,file,cb) => {
    cb(null, req.body.name)
  }
});

const upload = multer({storage:storage});
app.post("/api/upload", upload.single("file"), (req,res) => {
  res.status(200).json("File has been uploaded");
});

app.use("/api/auth", auth);
app.use("/api/users", user);
app.use("/api/posts", posts);
app.use("/api/categories", categories);
app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

app.listen("5000", () => {
  console.log("Backend is running");
});
