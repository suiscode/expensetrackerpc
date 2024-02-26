import "dotenv/config";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { sql } from "@vercel/postgres";

export async function POST(request) {
  const body = await request.json();
  console.log(body);

  const transactionsTable = await sql`CREATE TABLE IF NOT EXISTS transactions (
    id SERIAL PRIMARY KEY,
    type VARCHAR(20) NOT NULL CHECK (type IN ('Expense', 'Income')),
    amount INTEGER NOT NULL,
    category VARCHAR(255) NOT NULL,
    date VARCHAR(255) NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    payee VARCHAR(255) NOT NULL,
    note TEXT NOT NULL,
    user_id VARCHAR(255) NOT NULL
);`;
  const { type, amount, category, payee, note, userId, date } = body;
  const transaction =
    await sql`INSERT INTO transactions (type,amount,category,date,payee,note,user_id) VALUES (${type},${amount},${category},${date},${payee},${note},${userId})`;
  return new Response("success");
}

export async function GET(req) {
  try {
    const typeParam = req.nextUrl.searchParams.get("type");
    const sortParam = req.nextUrl.searchParams.get("sort");
    const cookieStore = cookies();
    const token = cookieStore.get("cookie").value;
    const { id } = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    let typeCondition = "";

    if (typeParam === "Expense" || typeParam === "Income") {
      typeCondition = `AND type = ${sql.literal(typeParam)}`;
    }

    // if (type === "Expense" || type === "Income") {
    //   query = sql`SELECT * FROM transactions WHERE user_id = ${id} AND type = ${type} `;
    // } else {
    //   query = sql`SELECT * FROM transactions WHERE user_id = ${id}`;
    // }

    const { rows } =
      await sql`SELECT * FROM transactions WHERE user_id = ${id}`;

    return NextResponse.json({ data: rows });
  } catch (error) {
    return new Response("Error");
  }
}
