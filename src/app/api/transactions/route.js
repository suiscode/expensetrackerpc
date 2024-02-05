import { connectDB } from "@/lib/utils";
import { Transactions, User } from "@/lib/models";
import { cookies } from "next/headers";

export async function POST(request) {
  connectDB();
  const body = await request.json();

  try {
    const user = await Transactions.create({ ...body });
    return new Response("User created");
  } catch (error) {
    return new Response("Error");
  }
}
