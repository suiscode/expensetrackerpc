import { User } from "@/lib/models";
import { connectDB, generateToken } from "@/lib/utils";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(res) {
  connectDB();
  const body = await res.json();
  const user = await User.findOne({ email: body.email });
  if (!user) {
    console.log('no user');
    return new Response("Email does not exist");
  } else {
    if (await bcrypt.compare(body.password, user.password)) {
      cookies().set("cookie", generateToken(user._id));
      return NextResponse.json({user:user});
    } else {
      return new Response('Email does not exist')
    }
  }
}
