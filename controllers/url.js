import { nanoid } from "nanoid";
import { URL } from "../models/url.js";

//function for generating nnew url

export const handelNewURl = async (req, res) => {
  const body = req.body;
  if (body.url) {
    const shortId = nanoid(8);
    await URL.create({
      shortID: shortId,
      redirectUrl: body.url,
      visitHistory: [],
    });
    return res.status(200).json({
      success: true,
      message: shortId,
    });
  } else {
    return res.status(400).json({
      success: false,
      message: "unable to find the url",
    });
  }
};

//function for reirect
export const redirect = async (req, res) => {
  const shortID = req.params.shortId;

  const entry = await URL.findOneAndUpdate(
    {
        shortID,
    },
    {
      $push: {
        visitHistory: { timestamp: Date.now() },
      },
    },
  );
  res.redirect(entry.redirectUrl);
};

//function for analytic

export const getAnalytic=async(req,res)=>
{
    const shortID=req.params.shortID
    const data=await URL.findOne({shortID});
    res.status(200).json({
        success:true,
        totalClicks:data.visitHistory.length,
        message:data
    })
}