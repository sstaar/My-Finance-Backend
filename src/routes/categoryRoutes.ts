import express from "express";
import { addCategory, getCategories } from "../controllers/categoryController";
import { protect } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/", protect, addCategory);
router.get("/", protect, getCategories);

export default router;
