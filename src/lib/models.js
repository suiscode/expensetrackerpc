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
  currency: {
    type: String,
    required: true,
    enum: ["USD", "MNT"],
  },
  balance: { type: Number, required: true },
});

export const User = mongoose.models.User ||  mongoose.model("User", userSchema)