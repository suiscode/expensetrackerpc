import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function POST(request) {
  const body = await request.json();
  const categoryTable = await sql`CREATE TABLE IF NOT EXISTS categories (
    id SERIAL PRIMARY KEY,
    img VARCHAR(255) NOT NULL,
    name VARCHAR(255) UNIQUE NOT NULL
);`;

  const categoryInsert = await sql`
    INSERT INTO categories (img, name)
    VALUES (${body.category.img},${body.category.name})
    ON CONFLICT (name) DO NOTHING;`;

  if (categoryInsert.rowCount === 1) {
    return NextResponse.json(
      { message: "Category inserted successfully" },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      { error: "Category already exists" },
      { status: 400 }
    );
  }
}

export async function GET(request) {
  try {
    const categories = await sql`SELECT * FROM categories`;
    return NextResponse.json({ categories: categories.rows }, { status: 200 });
  } catch (error) {
    console.error("Error fetching categories:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
