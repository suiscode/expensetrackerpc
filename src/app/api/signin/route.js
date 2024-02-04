import { User } from "@/lib/models";
import { connectDB, generateToken } from "@/lib/utils";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";

export async function POST(res) {
  connectDB();
  const body = await res.json();
  const user = await User.findOne({ email: body.email });
  if (!user) {
    return new Response("Email does not exist");
  } else {
    if (await bcrypt.compare(body.password, user.password)) {
      cookies().set("cookie", generateToken(user._id));
      return new Response('success');
    } else {
      return new Response("Incorrect Password");
    }
  }
}
