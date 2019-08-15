const Shareholder = require('../models/Shareholder');

module.exports = {
    index(req, res) {
        Shareholder.find({}, function(err, all) {
            if(err) {
                res.status(500);
                return res.json({ 'error': 'Estamos com problemas, desculpe!'})
            } else if (all == false) {
                res.status(200);
                return res.json({ 'error': 'nenhum cadastro encontrado'});
            } else {
                res.status(200);
                return res.json(all);
            }
        });
    },

    async store(req, res) {
        const {name, surname, percentage } = req.body;

        const userExists = await Shareholder.findOne({ name });

        if(userExists) {
            res.status(400);
            return res.json({
                "error": "Não pode ser cadastrado duas vezes"
            });
        }
        
        const shareHolder = await Shareholder.create({
            name,
            surname,
            percentage
        }); 
        
        res.status(201);
        return res.json(shareHolder);
    },

};