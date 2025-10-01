import { Request, Response } from "express";
import Category from "../models/Category";

export const addCategory = async (req: Request, res: Response) => {
    const { name } = req.body;

    try {
        const categoryExists = await Category.findOne({ name });
        if (categoryExists) {
            return res.status(400).json({ message: "Category already exists" });
        }

        const category = await Category.create({ name });
        res.status(201).json(category);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

export const getCategories = async (_req: Request, res: Response) => {
    try {
        const categories = await Category.find().sort({ createdAt: -1 });
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};
