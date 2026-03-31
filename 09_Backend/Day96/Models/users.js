const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: {
    },
    lastName: {
    },
    age:{
    },
    gender: {
    },
    email: {
    },
    photo: {
    },
    password: {
    }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

module.exports = User;