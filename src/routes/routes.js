const routes = require('express').Router();
const { getAllShareholders, addNewShareholder, updateShareholder } = require('../controllers/ShareholderController');

routes.get('/', getAllShareholders);
routes.post('/', addNewShareholder);
routes.put('/', updateShareholder);

module.exports = routes;
