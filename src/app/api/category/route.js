import { Category } from "@/lib/models";
import { connectDB } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function POST(request) {
  connectDB();
  const body = await request.json();
  try {
    const findOne = await Category.find({ name: body.category.name });
    console.log(findOne);
    if (findOne.length> 0) {
      return new Response("Category already exists");
    } else {
      const category = await Category.create(body.category);
      return new Response("User created");
    }
  } catch (error) {
    return new Response("Error");
  }
}

export async function GET(req) {
  try {
    connectDB();
    const data = await Category.find();
    return NextResponse.json({ data });
  } catch (error) {
    return new Response("Error");
  }
}
