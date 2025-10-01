import express from "express";
import { addExpense, getExpenses } from "../controllers/expenseController";
import { protect } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/", protect, addExpense);
router.get("/", protect, getExpenses);

export default router;
