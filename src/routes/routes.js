const routes = require('express').Router();
const ShareholderController = require('../controllers/ShareholderController');


routes.get('/', ShareholderController.all);
routes.post('/', ShareholderController.addNewShareholder);


module.exports = routes;
