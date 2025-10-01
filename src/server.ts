import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import authRoutes from "./routes/authRoutes";
import expenseRoutes from "./routes/expenseRoutes";
import categoryRoutes from "./routes/categoryRoutes";

dotenv.config();
connectDB();

const app: Application = express();
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/expenses", expenseRoutes);
app.use("/api/categories", categoryRoutes);

app.get("/", (req: Request, res: Response) => {
    res.send("Finance API is running...");
});

const PORT: number = parseInt(process.env.PORT || "5000", 10);
const HOST = process.env.HOST || "0.0.0.0";
app.listen(PORT, HOST, () => console.log(`Server running on port ${PORT}`));
