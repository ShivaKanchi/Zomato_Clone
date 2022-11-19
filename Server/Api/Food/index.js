import express from "express";

import { FoodModel } from "../../database/allModels";

const Router = express.Router();
/*
*Route    /:_id
*Desc     Get Food by id
*Params   _id
*Method   GET
*Access   Public
*/
Router.get("/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const food = FoodModel.findById(_id);
        return res.json({ food });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
*Route    /r/:_id
*Desc     Get Food by Restaurant id
*Params   _id
*Method   GET
*Access   Public
*/
Router.get("/r/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const foods = FoodModel.find({
            restaurant: _id
        });
        return res.json({ foods });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
*Route    /c/:category
*Desc     Get Food by category
*Params   category
*Method   GET
*Access   Public
*/
Router.get("/c/:category", async (req, res) => {
    try {
        const { category } = req.params;
        const foods = FoodModel.find({
            category: { $regex: category, $options: "i" }
        });
        if (!foods)
            return res
                .status(404)
                .json({ error: `No Food Mactched with ${category}` })
        return res.json({ foods });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;

