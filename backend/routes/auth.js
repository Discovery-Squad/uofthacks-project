import express from "express";
import fb from "../controllers/firebase.js";
import {
    addPath,
    getPath
} from "../controllers/paths.js";

const router = express.Router();

router.post("/login", (req, res) => loginUser(fb, req, res));
router.get("/logout", (req, res) => addPath(fb, req, res));

export default router;