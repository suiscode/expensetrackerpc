import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  },
  password: { type: String, required: true },
  registerDate: { type: Date, default: Date.now },
  obj: { type: Object, required: false, default: {a: "asd", b:'b'} },
  currency: {
    type: String,
    required: true,
    enum: ["USD", "MNT"],
  },
  balance: { type: Number, required: true },
});

const expenseSchema = new mongoose.Schema({
  type: { type: String, enum: ["Expense", "Income"], required: true },
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  date: { type: String, required: true },
  updatedAt: { type: Date, default: Date.now },
  payee: { type: String, required: true },
  note: { type: String, required: true },
  userId: { type: String, required: true },
});

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  img: { type: String, required: true },
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);

export const Transactions =
  mongoose.models.Transactions || mongoose.model("Transactions", expenseSchema);

export const Category =
  mongoose.models.Category || mongoose.model("Category", categorySchema);
