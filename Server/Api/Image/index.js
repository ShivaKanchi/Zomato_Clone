import express from "express";

import { ImageModel } from "../../database/allModels";

const Router = express.Router();
/*
*Route    /create
*Desc     create a Image
*Params   none
*Method   POST
*Access   Public
*/
Router.post("/create", async (req, res) => {
    try {
        const { data } = req.body;
        const resCreate = await ImageModel.create({
            ...data
        });
        return res.status(201).json({
            success: true,
            images: data
        }); } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})

export default Router;

