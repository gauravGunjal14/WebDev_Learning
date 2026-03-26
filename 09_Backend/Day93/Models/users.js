const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    city: String,
    age: Number,
});


const User = mongoose.model("User", userSchema);

module.exports = User;