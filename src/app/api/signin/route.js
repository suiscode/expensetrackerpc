import { User } from "@/lib/models";
import { generateToken } from "@/lib/utils";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function POST(res) {
  const body = await res.json();
  const existingUser =
    await sql`SELECT * FROM users WHERE email = ${body.email};`;
  if (!existingUser.rows.length) {
    return NextResponse.json(
      { error: "Email does not exist" },
      { status: 400 }
    );
  } else {
    console.log(existingUser.rows[0].password);
    if (await bcrypt.compare(body.password, existingUser.rows[0].password)) {
      cookies().set("cookie", generateToken(existingUser.rows[0].id));
      return NextResponse.json({ user: existingUser.rows[0] });
    } else {
      return new Response("Email does not exist");
    }
  }
}
