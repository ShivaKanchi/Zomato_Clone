import express from "express";

import { ReviewModel } from "../../database/allModels";

const Router = express.Router();


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
        }); } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})

export default Router;

