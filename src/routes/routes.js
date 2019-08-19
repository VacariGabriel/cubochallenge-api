const routes = require('express').Router();
const { allShareholders, addNewShareholder } = require('../controllers/ShareholderController');

routes.get('/', allShareholders);
routes.post('/', addNewShareholder);

module.exports = routes;
