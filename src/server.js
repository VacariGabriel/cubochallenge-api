const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
require('dotenv').config();

const server = express();

mongoose.connect(
  process.env.DB_HOST,
  {
    useNewUrlParser: true,
  },
);

server.use(express.json());
server.use(routes);

server.listen(3000, () => {
  console.log('Servidor Online na porta 3000');
});
