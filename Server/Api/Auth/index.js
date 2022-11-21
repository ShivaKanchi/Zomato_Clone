import express from "express";

import { UserModel } from "../../database/allModels";


const Router = express.Router();

/*
*Route    /register
*Desc     Register/create a user 
*Params   none
*Method   POST
*Access   Public
*/
Router.post("/register", async (req, res) => {

    try {
        await UserModel.findByEmailAndPhone(req.body.credentials);
        const newUser = await UserModel.create(req.body.credentials);
        const token = newUser.generateJwtToken();
        return res.status(200).json({ token, status: "success" });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})


/*
*Route    /login
*Desc     login a existing user and create a token
*Params   none
*Method   POST
*Access   Public
*/
Router.post("/login", async (req, res) => {
    try {
        const newUser = await UserModel.findByEmailAndPassword(req.body.credentials);
        const token = newUser.generateJwtToken();
        return res.status(200).json({ token, status: "success" });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})

export default Router;