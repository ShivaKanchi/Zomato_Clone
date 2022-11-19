import express from "express";

import { UserModel } from "../../database/allModels";


const Router = express.Router();

Router.post("/register", async (req, res) => {

    try {
        await UserModel.findByEmailAndPhone(req.body.crendetials);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})
Router.post("/loginin", async (req, res) => {

})

export default Router;