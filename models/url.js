import mongoose from "mongoose";

const urlSchema=new mongoose.Schema({
shortID:{
    type:String,
    required:true,
    unique:true
},
redirectUrl:
{
    type:String,
    required:true,
    unique:true
},
visitHistory:[{timestamp:{type:Number}}],

},{timestamps:true});

export const URL=mongoose.model("url",urlSchema);