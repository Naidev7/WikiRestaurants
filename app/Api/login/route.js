import { connectDB } from "@/app/libs/mongodb";
import user from "@/app/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    await connectDB();

    const userData = await user.findOne({ email: email });

    if (!userData)
      return NextResponse.json(
        { msg: "Error, this email is not registered." },
        { status: 400 }
      );

    const verifyPass = await bcrypt.compare(password, )

  } catch (error) {
    console.log("Error: ", error);
  }
}
