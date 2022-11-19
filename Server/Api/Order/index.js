import express from "express";

import { OrderModel } from "../../database/allModels";

const Router = express.Router();

/*
*Route    /
*Desc     Get Restaurant by city
*Params   none
*Method   GET
*Access   Public
*/
Router.get("/", async (req, res) => {
    try {

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;

