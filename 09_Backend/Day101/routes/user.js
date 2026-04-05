const express = require("express");
const router = express.Router();
const main = require("../database");
const User = require("../Models/users")
const validUser = require("../utils/validateuser")
const bcrypt = require("bcrypt");
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken');
require("dotenv").config();
router.use(cookieParser());

router.get("/info", async (req, res) => {
    try {
        const payload = jwt.verify(req.cookies.token, process.env.JWT_SECRET_KEY);
        console.log(payload);
        const result = await User.find();

        res.send(result);
    }
    catch (err) {
        res.send("Error" + err.message);
    }
})

router.get("/user", async (req, res) => {
    try {
        const payload = jwt.verify(req.cookies.token, process.env.JWT_SECRET_KEY);
        const result = await User.findById(payload._id);
        res.send(result);
    }
    catch (err) {
        res.send("Error" + err.message);
    }
})

router.delete("/user/:id", async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.send("Deleted Succesfully");
    }
    catch (err) {

        res.send("Error" + err.message);
    }
})

router.patch("/user", async (req, res) => {
    try {
        const { _id, ...update } = req.body;
        await User.findByIdAndUpdate(_id, update, { "runValidators": true });
        res.send("Update Succesfully");
    }
    catch (err) {
        res.send("Error " + err.message);
    }
})

module.exports = router;