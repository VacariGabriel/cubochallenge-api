const express = require('express');
const ShareholderController = require('./controllers/ShareholderController');

const routes = express.Router();

routes.get('/', ShareholderController.index);
routes.post('/', ShareholderController.store);


module.exports = routes;
