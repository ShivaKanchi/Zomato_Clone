import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String },
    address: [{ detail: { type: String }, for: { type: String } }],
    phone: [{ type: Number }]
}, {
    timestamps: true
});

//attachments of model
UserSchema.methods.generateJwtToken = function () { };
//helper functions
//to check if this data exists or not
UserSchema.statics.findByEmailAndPhone = async () => { };
UserSchema.statics.findByEmailAndPassword = async () => { };

export const UserModel = mongoose.model("users", UserSchema)