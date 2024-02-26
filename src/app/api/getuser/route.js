import "dotenv/config";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function GET(req) {
  // await sql`SELECT * FROM users WHERE email = ${body.email};`;
  const token = req.cookies.get("cookie").value;
  const { id } = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  const users = await sql`SELECT * FROM users WHERE id = ${id}`
  return NextResponse.json({ user: users.rows[0] });
}

