import express from "express";

import {
    generateTourMessage
} from "../controllers/tours.js";

const router = express.Router();

router.post("/message", generateTourMessage);

export default router;