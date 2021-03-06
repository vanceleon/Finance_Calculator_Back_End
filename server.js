const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

server.get('/', (req, res) =>
  res.status(200).json("Welcome to the Financial Caculator Backend!")
);

server.get('/helloWorld', (req, res) =>
  res.status(200).json("Welcome to world")
);

module.exports = server;