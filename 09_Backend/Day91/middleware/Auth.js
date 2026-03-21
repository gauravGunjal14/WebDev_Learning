function Auth(req, res, next) {
    const access = true
    if (access) {
        next();
    }
    else {
        res.status(401).send("Unauthorized");
    }
}

module.exports = Auth;