import express from "express";
import fb from "../controllers/firebase.js";
import {
    createUser,
    loginUser
} from "../controllers/auth.js";

import { getAuth, connectAuthEmulator } from "firebase/auth";

const router = express.Router();

router.post("/login", (req, res) => loginUser(fb, req, res));
router.post("/create", (req, res) => createUser(fb, req, res));

export default router;