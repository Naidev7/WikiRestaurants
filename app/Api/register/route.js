import { connectDB } from "@/app/libs/mongodb";
import user from "@/app/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST (req){
    try {
        const { name, email, password } = await req.json();

       /*  const findUser = await user.findOne({ email });
        console.log(findUser)

        if(findUser) return NextResponse.json({ msg: 'Email already exist'}) */

        const hashPassword = await bcrypt.hash(password, 10);
        await connectDB();
        await user.create({ name, email, hashPassword });

        return NextResponse.json({ msg: 'User registered.' }, { status: 201 });

    } catch (error) {
        console.log(error);
        return NextResponse.json(
        { msg: 'An error occurred while registring the user.' },
        { status: 500 }
        )
    }
}