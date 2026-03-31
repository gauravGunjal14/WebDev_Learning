const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const userAuth = async (req, res, next) => {
    try {
        const { token } = req.cookies;
        if (!token) {
            throw new Error("Token not found");
        }

        const payload = jwt.verify(req.cookies.token, "Gaurav@13412$");

        const { _id } = payload;
        if (!_id) {
            throw new Error("Id is missing");
        }
        const result = await User.findById(payload._id);

        if (!result) {
            throw new Error("User not found");
        }

        req.result = result;
        next();
    }
    catch (err) {
        res.send("Error" + err.message);
    }
}

module.exports = userAuth;