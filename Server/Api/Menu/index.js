import express from "express";

import { MenuModel } from "../../database/allModels";

const Router = express.Router();

/*
*Route    /list
*Desc     Get Menu by id
*Params   _id
*Method   GET
*Access   Public
*/
Router.get("/list/:_id", async (req, res) => {
    try {
const {_id} = req.params;
const menus =await MenuModel.findByid(_id)
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


/*
*Route    /list
*Desc     Get Menu Images
*Params   _id
*Method   GET
*Access   Public
*/
Router.get("/image/:_id", async (req, res) => {
    try {
const {_id} = req.params;
const menuImages =await MenuModel.findByid(_id)
if(!menuImages){
    return res.status(404).json({ message:"No menu images found"});   
}
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;

