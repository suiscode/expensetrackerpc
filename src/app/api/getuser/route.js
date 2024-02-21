import { User } from "@/lib/models";
import { connectDB } from "@/lib/utils";
import "dotenv/config";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function GET(req) {
  connectDB();
  const token = req.cookies.get("cookie").value;
  const { id } = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

  const user = await User.findById(id);

  return NextResponse.json({ user: user });
}

