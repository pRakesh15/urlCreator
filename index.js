import { config } from 'dotenv';
import express from'express';
import { router } from './routes/url.js';

export const app=express();
config();

app.use(express.urlencoded({extended:false}));
app.use(express.json())
app.use("/urll",router);
app.get("/",(req,res)=>
{
    res.send("thhis is home peg")
});