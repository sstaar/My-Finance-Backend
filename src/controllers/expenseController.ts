import { Request, Response } from "express";
import Expense from "../models/Expense";

export const addExpense = async (req: Request, res: Response) => {
    const { title, category, amount, description } = req.body;

    try {
        const expense = await Expense.create({
            user: req.user!.id,
            title,
            category, // must be a Category ID
            amount,
            description,
        });

        res.status(201).json(expense);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

export const getExpenses = async (req: Request, res: Response) => {
    try {
        const expenses = await Expense.find({ user: req.user!.id })
            .populate("category", "name") // populate category name
            .sort({ createdAt: -1 });

        res.json(expenses);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};
