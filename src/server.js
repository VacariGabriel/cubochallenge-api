const express = require('express');
const server = express();
//const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes');

//server.use(cors());

mongoose.connect("mongodb+srv://omnistack:omnistack@cluster0-3es5p.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true
});

server.use(express.json());
server.use(routes);



server.listen(3001, () => {
    console.log('Servidor Online!');
});