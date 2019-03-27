const express = require('express');
const postsRouter = require('./data/router.js');
const server = express();

server.use(express.json());
server.get('/', (req, res) => {
    res.send(`
        <h2>WEBAPI-II Challenge</h>
        <p>Welcome to the WEBAPI-II Challenge</p>
    `);
});
server.use('/api/users', postsRouter);

module.exports = server;