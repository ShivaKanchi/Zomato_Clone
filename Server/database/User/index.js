import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({

}, {
    timestamps: true
})

export const ImageModel = mongoose.model("images", ImageSchema)