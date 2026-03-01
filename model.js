import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()
const mongouri = process.env.MONGODB_URI
mongoose.connect(mongouri)

const Schema = mongoose.Schema({
    pname:String,
    desc:String,
    trigger:String,
    ques:String,
    pdate:String
},{timestamps:true})

const pattersnmodel = mongoose.model("patternsmodel",Schema)
export default pattersnmodel 