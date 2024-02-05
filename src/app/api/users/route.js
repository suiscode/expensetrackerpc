import { connectDB } from "@/lib/utils";
import { User } from "@/lib/models";

export async function POST(request) {
  connectDB()
  return new Response('hi')
}
