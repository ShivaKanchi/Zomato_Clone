import mongoose from "mongoose";

const FoodSchema = new mongoose.Schema({

}, {
    timestamps: true
})

export const FoodModel = mongoose.model("foods", FoodSchema)