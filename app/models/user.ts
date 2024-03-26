
import mongoose, { Mongoose } from "mongoose";
import { unique } from "next/dist/build/utils";

const schema = new mongoose.Schema({
    name: String,
    email: {type: String, unique: true},
    password: String,
});
export default mongoose.models.user || mongoose.model('user', schema)