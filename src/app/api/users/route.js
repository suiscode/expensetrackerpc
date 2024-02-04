import { connectDB } from "@/lib/utils";
import { User } from "@/lib/models";

export async function POST(request) {
  connectDB()
  console.log('hi');
  return new Response('hi')
}
