import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDatabase from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";

dotenv.config();
connectDatabase();

const port = 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));
