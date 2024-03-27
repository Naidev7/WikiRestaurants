import { connectDB } from "@/app/libs/mongodb";
import user from "@/app/models/user";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();
    const { email } = await req.json();
    const userData = await user.findOne({ email: email }).select("_id");

    if (userData) { 
      return NextResponse.json({ userData })
    };
    if(!userData){ 
      return NextResponse.json({ userData })
    }


  } catch (error) {
    console.log("Error during login: ", error);
  }
}
