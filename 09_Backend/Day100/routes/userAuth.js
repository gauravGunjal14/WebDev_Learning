const express = require("express");
const router = express.Router();
const main = require("../database");
const User = require("../Models/users")
const validUser = require("../utils/validateuser")
const bcrypt = require("bcrypt");
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken');
const redisClient = require("../config/redis");
require("dotenv").config();
router.use(cookieParser());
const jwt = require('jsonwebtoken');

router.post("/register", async (req, res) => {
    try {
        validUser(req.body);
        req.body.password = await bcrypt.hash(req.body.password, 10);
        await User.create(req.body);
        res.send("User Registered Successfully");
    }
    catch (err) {
        res.send("Error " + err.message);
    }
})

router.post("/login", async (req, res) => {
    try {
        const people = await User.findOne({ emailId: req.body.emailId });

        const IsAllowed = await bcrypt.compare(req.body.password, people.password);

        if (!IsAllowed){
            throw new Error("Invalid credentials");
        }

        const token = jwt.sign({ _id: people._id, emailId: people.emailId }, process.env.JWT_SECRET_KEY);
        res.cookie("token", token);
        res.send("Login Successfully");
    }
    catch (err) {
        res.send("Error: " + err.message);
    }
});



router.get("/logout", validUser, async (req, res) => {
    const {token} = req.cookies;
    redisClient.set(`token:${token}`, null);
    const Payload = jwt.decode(token);
    
    // await redisClient.expire(`token:${token}`, 1800);
    await redisClient.expireAt(`token:${token}`, Payload.exp);

    res.cookie("token", null, { expires: new Date(Date.now() - 1) });
    res.send("Logout Successfully");
});

module.exports = router;