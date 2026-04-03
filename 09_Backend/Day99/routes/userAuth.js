app.post("/register", async (req, res) => {
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

app.post("/login", async (req, res) => {
    try {
        const people = await User.findOne({ emailId: req.body.emailId });

        const IsAllowed = await bcrypt.compare(req.body.password, people.password);

        if (!IsAllowed){
            throw new Error("Invalid credentials");
        }

        const token = jwt.sign({ _id: people._id, emailId: people.emailId }, "Rohit@13412$");

        res.cookie("token", token);
        res.send("Login Successfully");

    }
    catch (err) {
        res.send("Error: " + err.message);
    }
})

app.get("/logout", (req, res) => {
    res.cookie("token", null, { expires: new Date(Date.now() - 1) });
    res.send("Logout Successfully");
});