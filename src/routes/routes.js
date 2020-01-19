const routes = require('express').Router();
const { getAllShareholders, addNewShareholder, updateShareholder, deleteShareholder } = require('../controllers/ShareholderController');

routes.get('/', getAllShareholders);
routes.post('/', addNewShareholder);
routes.put('/', updateShareholder);
routes.delete('/', deleteShareholder);

module.exports = routes;
