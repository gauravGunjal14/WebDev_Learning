const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20
    },
    lastName: {
        type: String,
        minlength: 3,
        maxlength: 20
    },
    age:{
        type: Number,
        required: true,
        min: 18,
        max: 100
    },
    gender: {
        type: String,
        // enum: ["Male", "Female", "Other"],
        validate(value) {
            if(!["Male", "Female", "Other"].includes(value)){
                throw new Error("Invalid gender value");
            }
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        immutable: true,
    },
    photo: {
        type: String,
        default: "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png"
    }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

module.exports = User;