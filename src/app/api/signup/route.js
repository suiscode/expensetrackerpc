import { connectDB, generateToken } from "@/lib/utils";
import { User } from "@/lib/models";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";

export async function POST(request) {
  connectDB();
  const body = await request.json();
  console.log(body);

  try {
    const hashedPassword = await bcrypt.hash(body.password, 10);
    console.log(hashedPassword);
    const user = await User.create({
      ...body,
      password: hashedPassword,
    });

    cookies().set("cookie", generateToken(user._id));
    return new Response("User created");
  } catch (error) {
    return new Response("Error");
  }
}
