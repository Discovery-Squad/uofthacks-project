import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import bodyParser from "body-parser";

import { getAuth, connectAuthEmulator } from "firebase/auth";
import fb from "./controllers/firebase.js";

import writeUserData from "./controllers/write_sample.js";

import authRouter from "./routes/auth.js";
import toursRouter from "./routes/tours.js";
import pathsRouter from "./routes/paths.js";

// Initialize express app
const app = express();
const port = process.env.PORT || 8000;

// app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(bodyParser.json());

// Store routing middleware.
app.use("/tours", toursRouter);
app.use("/paths", pathsRouter);
app.use("/auth", authRouter);

app.get("/", (req, res) => {
  writeUserData(fb, "1234", "danny", "lazaro", "https://commons.wikimedia.org/wiki/Main_Page#/media/File:2015.07.07.-07-Mulde_Eilenburg--Duenen-Sandlaufkaefer.jpg");
  res.status(200).send("Successful!");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});