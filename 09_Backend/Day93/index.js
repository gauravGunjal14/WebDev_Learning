const express = require("express");
const app = express();
const main = require("./database");
const User = require("./Models/users");

app.use(express.json());

app.get("/info", async (req, res) => {
    const result = await User.find({});
    res.send(result);
})

app.post("/info", async (req, res) => {

    try{
    const newUser = await User.create(req.body);
    res.send("User created successfully");
    }catch(err){
        res.status(500).send("Error creating user");
    }
});

main()
    .then(async () => {
        console.log("Connected to MongoDB")
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });

        // const result = await User.find({ city: "New York" });
        // console.log(result);
    })
    .catch((err) => console.error("Error connecting to MongoDB:", err));