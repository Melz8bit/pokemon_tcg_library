import express from "express";
import {
    searchCards
} from "../controllers/searchController.js";

const router = express.Router();

router.get("/:cardName", searchCards);
// router.get("/:id", getCardById);
// router.post("/", createNote);
// router.put("/:id", updateNote);
// router.delete("/:id", deleteNote);

export default router;