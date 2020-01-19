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
    const shareHolderExists = await Shareholder.findOne({
      name,
      surname,
    });

    if (shareHolderExists) {
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
    // eslint-disable-next-line no-shadow
    const updateShareholder = await Shareholder.findOneAndUpdate(
      { name, surname },
      { $set: { percentage } },
      { new: true },
    );

    if (!updateShareholder) {
      res.status(200).json({ message: 'Nenhum cadastro encontrado' });
    } else {
      res.status(200).json(updateShareholder);
    }
  } catch (err) {
    res.status(400).json({ message: 'Erro ao atualizar' });
  }
};

const deleteShareholder = async (req, res) => {
  const { name, surname } = req.body;

  try {
    // eslint-disable-next-line no-shadow
    const deleteShareholder = await Shareholder.findOneAndRemove({ name, surname });

    if (!deleteShareholder) {
      res.status(200).json({ message: 'Nenhum cadastro encontrado' });
    } else {
      res.status(200).json({ message: 'deletado com sucesso' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Estamos com problema, desculpe!' });
  }
};

module.exports = {
  getAllShareholders,
  addNewShareholder,
  updateShareholder,
  deleteShareholder,
};
