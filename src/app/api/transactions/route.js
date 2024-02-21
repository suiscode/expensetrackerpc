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

export async function GET(req , res) {
  const offset = req.nextUrl.searchParams.get('offset')
  const limit = req.nextUrl.searchParams.get('limit')
  try {
    connectDB();
    const cookieStore = cookies();
    const token = cookieStore.get("cookie").value;
    const { id } = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const data = await Transactions.find({ userId: '65d56a6b72ab8bf0b49536d5' })
      .sort({ date: -1 })
      .skip((Number(offset) - 1) * limit)
      .limit(Number(limit));

      // data  = 10
      // niit = 25
      // niit - limit = 15
      // niit = 15 / 10 
      // 2  

    return NextResponse.json({ data, count: 3 });
  } catch (error) {
    return new Response("Error");
  }
}
