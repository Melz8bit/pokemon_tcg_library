import express from "express";
import {
    getAllCards,
    getCardById
} from "../controllers/cardsControllers.js";
// import {
//   createNote,
//   deleteNote,
//   getAllNotes,
//   getNoteById,
//   updateNote,
// } from "../controllers/notesController.js";

const router = express.Router();

router.get("/", getAllCards);
router.get("/:id", getCardById);
// router.post("/", createNote);
// router.put("/:id", updateNote);
// router.delete("/:id", deleteNote);

export default router;