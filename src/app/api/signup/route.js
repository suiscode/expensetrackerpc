import { generateToken } from "@/lib/utils";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function PUT(request) {
  const body = await request.json();
  console.log(body);
  try {
    const userTable = await sql`CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        register_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        currency VARCHAR(3) NOT NULL CHECK (currency IN ('USD', 'MNT')),
        balance INTEGER NOT NULL
    );`;

    const existingUser =
      await sql`SELECT * FROM users WHERE email = ${body.email};`;
    if (existingUser.rows.length > 0) {
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 400 }
      );
    }
    return NextResponse.json(existingUser, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}

export async function POST(request) {
  const body = await request.json();
  const { name, email, password, currency, balance } = body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await sql`
    INSERT INTO users (name, email, password, currency, balance)
    VALUES (${name}, ${email}, ${hashedPassword}, ${currency}, ${balance})
    RETURNING id, balance;
  `;

    const insertedId = user.rows[0].id;
    console.log(user.rows[0].balance);
    cookies().set("cookie", generateToken(insertedId));
    return NextResponse.json("User inserted successfully", { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
