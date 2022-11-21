import express from "express";

import { OrderModel } from "../../database/allModels";

const Router = express.Router();



/*
*Route    /
*Desc     Get all orders by user id
*Params   _id
*Method   GET
*Access   Private
*/
Router.get("/:_id",passport.authenticate("jwt", { session: false }),async (req, res) => {
    try {
const {user} =req.user;
const getOrders= await OrderModel.findOne({user:user});
if(!getOrders){
    return res.status(404).json({ message:"No Orders found"});   
}
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


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

