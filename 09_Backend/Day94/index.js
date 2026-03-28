const express = require("express");
const app = express();
const main = require("./database");
const User = require("./Models/users");

app.use(express.json());

app.post("/user", async (req, res) => {
    try{
        // validate at api level
        const mandatoryFields = ["firstName", "age", "email"];

        const IsAllowed = Object.keys(req.body).every((key) => mandatoryFields.includes(key));

        if(!IsAllowed){
            throw new Error("Fields Missing");
        }
        await User.create(req.body);
        res.send("User created successfully");
    }
    catch(err){
        res.send("Error creating user: " + err);
    }
});

app.get("/users", async (req, res) => {
    try{
        res.send(await User.find({}));
    }
    catch(err){
        res.send("Error fetching users: " + err);
    }
});

app.get("/user/:id", async (req, res) => {
    try{
        res.send(await User.findById(req.params.id));
    }
    catch(err){
        res.send("Error fetching user: " + err);
    }
});

app.delete("/user/:id", async (req, res) => {
    try{
        await User.findByIdAndDelete(req.params.id);
        res.send("User deleted successfully");
    }
    catch(err){
        res.send("Error deleting user: " + err);
    }
});

app.patch("/user/:id", async (req, res) => {
    try{
        await User.findByIdAndUpdate(req.params.id, req.body, {"runValidators": true});
        res.send("User updated successfully");
    }
    catch(err){
        res.send("Error updating user: " + err);
    }
});

main()
    .then(async () => {
        console.log("Connected to MongoDB")
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    })
    .catch((err) => console.error("Error connecting to MongoDB:", err));