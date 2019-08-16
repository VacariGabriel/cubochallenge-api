const Shareholder = require('../models/Shareholder');

module.exports = {
    all(req, res) {
        Shareholder.find({}, function(err, all) {
            if(err) {
                res.status(500);
                return res.json({ 'errorMessage': 'Estamos com problemas, desculpe!'})
            } else if (!all) {
                res.status(200);
                return res.json({ 'errorMessage': 'nenhum cadastro encontrado'});
            }
            
            res.status(200);
            return res.json(all);
        });
    },

    async addNewShareHolder(req, res) {
        const {name, surname, percentage } = req.body;

        const userExists = await Shareholder.findOne({ name });

        if(userExists) {
            res.status(400);
            return res.json({ "errorMessage": "Não pode ser cadastrado duas vezes" });
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