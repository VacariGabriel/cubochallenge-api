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

mongoose.set('useFindAndModify', false);

server.use(express.json());
server.use(routes);

server.listen(process.env.PORT, () => {
  console.log(`Server is online`);
});
