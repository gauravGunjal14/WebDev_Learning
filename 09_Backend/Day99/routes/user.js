app.get("/info", async (req, res) => {
    try {
        const payload = jwt.verify(req.cookies.token, JWT_SECRET_KEY);
        console.log(payload);
        const result = await User.find();

        res.send(result);
    }
    catch (err) {
        res.send("Error" + err.message);
    }
})

app.get("/user", async (req, res) => {
    try {
        const payload = jwt.verify(req.cookies.token, JWT_SECRET_KEY);
        const result = await User.findById(payload._id);
        res.send(result);
    }
    catch (err) {
        res.send("Error" + err.message);
    }


})

app.delete("/user/:id", async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.send("Deleted Succesfully");
    }
    catch (err) {

        res.send("Error" + err.message);
    }
})

app.patch("/user", async (req, res) => {
    try {
        const { _id, ...update } = req.body;
        await User.findByIdAndUpdate(_id, update, { "runValidators": true });
        res.send("Update Succesfully");
    }
    catch (err) {
        res.send("Error " + err.message);
    }
})