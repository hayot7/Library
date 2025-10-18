const { Router } = require("express");
const { Schema, model } = require("mongoose");

const Auth = new Schema({
    user_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: false,
        enum: {
            values: ["user", "admin", "superadmin"],
            message: `{VALUE} bunday qiymat qabul qilinmaydi`
        },
        default: "user"
    },
    otp: {
        type: String,
        required: true
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isVerifiedForgotPassword: {
        type: Boolean,
        default: false
    },
    otpTime: {
        type: Number,
        default: false
    },
    lastName: {
        type: String,
        required: true,
        required: false,
        default: null
    },
    firstName: {
        type: String,
        required: false,
        default: null
    },
    phoneNumber: {
        type: String,
        required: false,
        default: null
    },
    img: {
        type: String,
        required: false,
        default: null
    },
},
    {
        versionKey: false,
        timeseries: true
    }
)


const AuthSchema = model("Auth", Auth)

module.exports = AuthSchema
