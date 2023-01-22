import express from "express";
import { initializeApp } from "firebase/app";
import fb from "../controllers/firebase.js";
import {
    addPath,
    getPath
} from "../controllers/paths.js";

const router = express.Router();

router.get("/:pathName", (req, res) => getPath(fb, req, res));
router.post("/:pathName", (req, res) => addPath(fb, req, res));

export default router;