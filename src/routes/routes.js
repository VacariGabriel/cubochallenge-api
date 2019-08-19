const routes = require('express').Router();
const { getAllShareholders, addNewShareholder } = require('../controllers/ShareholderController');

routes.get('/', getAllShareholders);
routes.post('/', addNewShareholder);

module.exports = routes;
