import { Schema } from "mongoose";
import mongoose, { Mongoose } from "mongoose";

const schema = new mongoose.Schema({
    name: String,
    ubi: String,
    category: String,
    desc: String,
    image: String,
    user: Array
})
 export default mongoose.models.restaurants || mongoose.model('restaurants', schema)