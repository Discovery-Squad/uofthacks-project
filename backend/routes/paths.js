import express from "express";
import { initializeApp } from "firebase/app";
import fb from "../controllers/firebase.js";
import {
    addPath,
    getPath
} from "../controllers/paths.js";

const router = express.Router();

// // Firebase configuration 
// const firebaseConfig = {
//     // The value of `databaseURL` depends on the location of the database
//     databaseURL: "https://uofthacks-backend-default-rtdb.firebaseio.com/",
//   };  
// // Initialize Firebase app
// const fb = initializeApp(firebaseConfig);


router.get("/:pathName", (req, res) => getPath(fb, req, res));
router.post("/:pathName", (req, res) => addPath(fb, req, res));

export default router;