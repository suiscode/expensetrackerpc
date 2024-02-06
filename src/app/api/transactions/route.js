import { connectDB } from "@/lib/utils";
import { Transactions, User } from "@/lib/models";
import "dotenv/config";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(request) {
  connectDB();
  const body = await request.json();
  try {

    const transaction = await Transactions.create({ ...body });
    return new Response("User created");
  } catch (error) {
    return new Response("Error");
  }
}

export async function GET(req) {
  try {
    connectDB();
    const cookieStore = cookies();
    const token = cookieStore.get("cookie").value;
    const { id } = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const data = await Transactions.find({ userId: id });
    return NextResponse.json({ data });
  } catch (error) {
    return new Response("Error");
  }
}
