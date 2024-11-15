const User = require('../models/User');

exports.createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await User.createUser(name, email, password);
    res.status(201).json(newUser);
  } catch (err) {
    console.error('Erro ao criar usuário:', err);
    res.status(500).send('Erro ao criar usuário');
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.getUsers();
    res.json(users);
  } catch (err) {
    console.error('Erro ao buscar usuários:', err);
    res.status(500).send('Erro ao buscar usuários');
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;
    const updatedUser = await User.updateUser(id, name, email, password);
    if (updatedUser) {
      res.json(updatedUser);
    } else {
      res.status(404).send('Usuário não encontrado');
    }
  } catch (err) {
    console.error('Erro ao atualizar usuário:', err);
    res.status(500).send('Erro ao atualizar usuário');
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.deleteUser(id);
    res.send('Usuário deletado com sucesso');
  } catch (err) {
    console.error('Erro ao deletar usuário:', err);
    res.status(500).send('Erro ao deletar usuário');
  }
};
