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

app.use(express.json());
app.use(cookieParser())

app.use("/auth", userAuth);
app.use("/user", user);

main()
    .then(async () => {
        console.log("Connected to DB")
        app.listen(PORT, () => {
            console.log(`Listening at port ${PORT}`);
        })
    })
    .catch((err) => console.log(err));