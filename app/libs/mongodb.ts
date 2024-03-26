import mongoose, { Mongoose } from "mongoose";

export async function connectDB (){

    try {
       await mongoose.connect(process.env.DB__URL)
        console.log('Connected with mongoDB')
    } catch (error) {
        console.log(error)
    }
}