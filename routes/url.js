import express from 'express';
import { getAnalytic, handelNewURl, redirect } from '../controllers/url.js';

export const router=express.Router();

router.post("/",handelNewURl);
router.route("/:shortId").get(redirect);
router.get("/analytic/:shortID",getAnalytic);