import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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
//signing a token /creating
UserSchema.methods.generateJwtToken = function () {
    return jwt.sign({ user: this._id.toString() }, "ZomatoApp");
};

//helper functions
//to check if this data exists or not
UserSchema.statics.findByEmailAndPhone = async ({ email, phone }) => {
    const checkUserByEmail = await UserModel.findOne({ email });
    const checkUserByPhone = await UserModel.findOne({ phone });

    if (checkUserByEmail || checkUserByPhone) {
        throw new Error("User already existed with this fields...");
    }
    return false;
};

UserSchema.statics.findByEmailAndPassword = async ({ email, password }) => {

    const user = await UserModel.findOne({ email });
    if (!user) throw new Error("User does not exist...");
    const doesPasswordMatch = await bcrypt.compare(password, user.password);
    if (!doesPasswordMatch) throw new Error("Wrong ceredentials...");
    return user;
};
UserSchema.pre('save', function (next) {
    const user = this;
    //password is encrypted here
    if (!user.isModified('password')) return next();
    //generate bcrypt salt
    bcrypt.genSalt(8, (error, salt) => {
        if (error) return next(error);
        bcrypt.hash(user.password, salt, (error, hash) => {
            if (error) return next(arrow);
            //asssigning hashed password
            user.password = hash;
            return next()
        })
    })
})

export const UserModel = mongoose.model("users", UserSchema)