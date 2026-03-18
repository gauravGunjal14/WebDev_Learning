const express = require('express');

const app = express();

app.use("/api", (req, res) => {
    res.send({
        message: 'Hello, World!',
        status: 200,
        data: null
    });
});

app.use("/users", (req, res) => {
    res.send({
        message: 'User list',
        status: 200,
        data: [
            { id: 1, name: 'Alice' },
            { id: 2, name: 'Bob' },
            { id: 3, name: 'Charlie' }
        ]
    });
}
);

app.use("/", (req, res) => {
    res.send("Welcome to the Express.js server!");
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});