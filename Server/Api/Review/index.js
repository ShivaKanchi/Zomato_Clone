import express from "express";
import passport from "passport";
import { ReviewModel } from "../../database/allModels";

const Router = express.Router();

/*
*Route    /create
*Desc     create a Review
*Params   none
*Method   GET
*Access   Public
*/
Router.get("/:resid", async (req, res) => {
    try {
        const { resid } = req.params;
        const reviews = await ReviewModel.find({ restaurants: resid }).sort({
            createdAt: -1,
        });
        return res.json({ reviews });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})





/*
*Route    /create
*Desc     create a Review
*Params   none
*Method   POST
*Access   Public
*/
Router.post("/create", async (req, res) => {
    try {
        const { data } = req.body;
        const newData = await ReviewModel.create({
            ...data
        });
        return res.status(201).json({
            success: true,
            Order: newData
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})

export default Router;

