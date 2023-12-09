import express from 'express';
import { URL } from '../models/url.js';

export const router=express.Router();

router.get('/',async(req,res)=>
{
    const allUrls=await URL.find({});
    res.render("home",{
        urls:allUrls,
    })
})