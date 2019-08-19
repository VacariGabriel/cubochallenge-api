const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');

const server = express();

mongoose.connect(
  'mongodb+srv://omnistack:omnistack@cluster0-3es5p.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
  },
);

server.use(express.json());
server.use(routes);

server.listen(3000, () => {
  console.log('Servidor Online na porta 3000');
});
