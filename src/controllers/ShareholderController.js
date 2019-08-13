const Shareholder = require('../models/Shareholder');

module.exports = {
    index(req, res) {
         
        res.send(shareholder); 
    },

    store(req, res) {
        const shareholder = req.body;
        res.json(shareholder);
    },
};