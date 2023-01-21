import express from "express";

import { initializeApp } from "firebase/app";

import writeUserData from "./controllers/write_sample.js";

// Initialize express app
const app = express();
const port = process.env.PORT || 8000;

// Firebase configuration 
const firebaseConfig = {
    // The value of `databaseURL` depends on the location of the database
    databaseURL: "https://uofthacks-backend-default-rtdb.firebaseio.com/",
  };  
// Initialize Firebase app
const fb = initializeApp(firebaseConfig);


app.get("/", (req, res) => {
  writeUserData(fb, "1234", "danny", "lazaro", "https://commons.wikimedia.org/wiki/Main_Page#/media/File:2015.07.07.-07-Mulde_Eilenburg--Duenen-Sandlaufkaefer.jpg");
  res.status(200).send("Successful!");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});