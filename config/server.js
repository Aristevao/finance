const port = 3003;

const express = require('express');
const server = express();

server.use(express.json()); // json parse
server.use(express.urlencoded({ // parse of data from form submission
  extended: true
}));

server.listen(port, () => console.log(`Server is listening on http://localhost:${port}`));

module.exports = server;