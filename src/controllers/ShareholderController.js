const Shareholder = require('../models/Shareholder');

const getAllShareholders = async (req, res) => {
  try {
    const shareholders = await Shareholder.find();
    if (!shareholders) {
      res.status(200).json({ message: 'Nenhum cadastro encontrado' });
    }
    res.status(200).json(shareholders);
  } catch (err) {
    res.status(400).json({ message: 'Estamos com problemas, desculpe!' });
  }
};

const addNewShareholder = async (req, res) => {
  const { name, surname, percentage } = req.body;

  try {
    const userExists = await Shareholder.findOne({
      name,
      surname,
    });

    if (userExists) {
      res.status(400).json({
        message: 'Não pode ser cadastrado duas vezes',
      });
    }
    const shareHolder = await Shareholder.create({
      name,
      surname,
      percentage,
    });
    res.status(201).json(shareHolder);
  } catch (err) {
    res.status(400).json({ message: 'Erro ao cadastrar.' });
  }
};

const updateShareholder = async (req, res) => {
  const { name, surname, percentage } = req.body;
  
  try {
    const updateShareholder = await Shareholder.findOneAndUpdate(
      { name, surname },
      { $set: { percentage }},
      { new: true }
    );

    if (!updateShareholder) {
      res.status(200).json({ message: 'Nenhum cadastro encontrado' });
    } else {
      res.status(200).json(updateShareholder);
    }   
  } catch (err) {
    res.status(400).json({ message: 'Erro ao atualizar'});
  }
};

module.exports = {
  getAllShareholders,
  addNewShareholder,
  updateShareholder
};
