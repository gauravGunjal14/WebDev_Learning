const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Hello, World!');
    }
    else if (req.url === '/about') {
        res.end('This is the about page.');
    }
    else {
        res.end('Page not found.');
    }
})

server.listen(3000, () => {
    console.log('Server is running on port 3000');
})