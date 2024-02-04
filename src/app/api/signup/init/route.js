import { connectDB } from "@/lib/utils";
import { User } from "@/lib/models";
import bcrypt from 'bcrypt'

export async function POST(request) {
  connectDB()
  const body = await request.json()
  const user = await User.findOne({ email: body.email });
  if(user){
    return new Response('Email already exists')
  } else {
    return new Response('send to next')
  }
 

}
