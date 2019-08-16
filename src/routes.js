const routes = require('express').Router();
const ShareholderController = require('./controllers/ShareholderController');


routes.get('/', ShareholderController.all);
routes.post('/', ShareholderController.addNewShareHolder);


module.exports = routes;
