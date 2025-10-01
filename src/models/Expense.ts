import mongoose, { Schema, Document } from "mongoose";

export interface IExpense extends Document {
    user: mongoose.Types.ObjectId;
    title: string;
    category: string;
    amount: number;
    description?: string;
}

const expenseSchema = new Schema<IExpense>({
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    title: { type: String, required: true },
    category: { type: String, required: true },
    amount: { type: Number, required: true },
    description: { type: String },
}, { timestamps: true });

export default mongoose.model<IExpense>("Expense", expenseSchema);
