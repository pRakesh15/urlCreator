import { config } from 'dotenv';
import express from'express';
import { router } from './routes/url.js';
import path from 'path';
import { URL } from './models/url.js';
import { router as rout } from './routes/staticRouter.js';

export const app=express();
config();
app.set("view engine","ejs");
app.set('views',path.resolve('./views'));
app.use(express.urlencoded({extended:false}));
app.use(express.json())
app.use("/urll",router);
app.use("/",rout)
app.get("/",async(req,res)=>
{
    const allUrl=await URL.find({});
    console.log(allUrl[0].shortID)
    res.render('home',
    {
        urls:allUrl,
    });
});