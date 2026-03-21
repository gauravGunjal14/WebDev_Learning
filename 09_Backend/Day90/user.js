const express = require('express');
const app = express();

app.use("/user", (req, res, next) => {
    console.log("Middleware for /user route");
    console.log("Request method:", req.method);
    console.log("Request URL:", req.url);
    console.log("Time:", new Date());
    next();
});

app.get("/user", (req, res) => {
    res.send("User data");
});

app.post("/user", (req, res) => {
    res.send("User created successfully");
});

app.put("/user/:id", (req, res) => {
    res.send("User updated successfully");
});

app.delete("/user/:id", (req, res) => {
    res.send("User deleted successfully");
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});