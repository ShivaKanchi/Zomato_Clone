import express from "express";
import passport from "passport";
import { UserModel } from "../../database/allModels";

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
        const { email, fullname, phone, address } =
            req.user;
        return res.json({ user: { email, fullname, phone, address } });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
*Route    /:_id
*Desc     Get Restaurant by id
*Params   _id
*Method   GET
*Access   Public
*/
Router.get("/:_id", async (req, res) => {
    try {
        //https://localhost:4000/restuarant/?city=mumbai
        const { _id } = req.params;
        const restuarant = await RestaurantModel.findById({ _id });
        if (!restuarant)
            return res
                .status(404)
                .json({ error: `No Restaurants found with id ${_id}` })
        return res.json({ restuarant });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


/*
*Route    /search/:searchstring
*Desc     Get Restaurant by searchstring
*Params   none
*Method   GET
*Access   Public
*/
Router.get("/search/:searchstring", async (req, res) => {
    try {
        //https://localhost:4000/restuarant/?city=mumbai
        const { searchstring } = req.params;
        const restuarants = await RestaurantModel.find({
            name: { $regex: searchstring, $options: "i" }
        });
        if (!restuarants.length === 0)
            return res
                .status(404)
                .json({ error: `No Restaurants found with name ${searchstring}` })
        return res.json({ restuarants });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;

