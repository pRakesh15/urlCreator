import mongoose from "mongoose";

export const dbConnection=async()=>
{
    await mongoose.connect("mongodb://127.0.0.1:27017/urlcreator");
}
dbConnection()
.then((e)=>console.log("database connected !!"))
.catch((err)=>console.log(err));