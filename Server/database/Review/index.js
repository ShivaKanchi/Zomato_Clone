import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
    food: { type: mongoose.Types.ObjectId, ref: "foods" },
    restaurnat: { type: mongoose.Types.ObjectId, ref: "reviews" },
    user: { type: mongoose.Types.ObjectId, ref: "users" },
    ratings: { type: Number, required: true }
}, {
    timestamps: true
})

export const ReviewModel = mongoose.model("reviews", ReviewSchema)