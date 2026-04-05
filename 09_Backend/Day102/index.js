// rate limiter using sliding window algorithm

const express = require("express");
const app = express();
const main = require("./database");
const User = require("./Models/users")
const validUser = require("./utils/validateuser")
const bcrypt = require("bcrypt");
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken');
const userAuth = require("./routes/userAuth")
const user = require("./routes/user")
require("dotenv").config();
const redisClient = require("./config/redis")
const rateLimiter = require("./middleware/rateLimiter");

app.use(express.json());
app.use(cookieParser());

app.use(rateLimiter);

app.use("/auth", userAuth);
app.use("/users", user);

const InitlizeConnection = async () => {
    try {
        // await redisClient.connect();
        // console.log("Connected to Redis");

        // await main();
        // console.log("Connected to DB");

        await Promise.all([redisClient.connect(), main()]);

        app.listen(process.env.PORT, () => {
            console.log(`Listening at port ${process.env.PORT}`);
        });
    }
    catch (err) {
        console.log("Error connecting to Redis", err);
    }
}

InitlizeConnection();