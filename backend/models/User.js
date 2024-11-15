const pool = require('../db');

// Função para inserir um novo usuário
const createUser = async (name, email, password) => {
  const query = 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *';
  const values = [name, email, password];
  const result = await pool.query(query, values);
  return result.rows[0];
};

// Função para buscar todos os usuários
const getUsers = async () => {
  const result = await pool.query('SELECT * FROM users');
  return result.rows;
};

// Função para atualizar um usuário por ID
const updateUser = async (id, name, email, password) => {
  const query = `
    UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4 RETURNING *;
  `;
  const values = [name, email, password, id];
  const result = await pool.query(query, values);
  return result.rows[0];
};

// Função para deletar um usuário por ID
const deleteUser = async (id) => {
  const query = 'DELETE FROM users WHERE id = $1';
  await pool.query(query, [id]);
  return 'Usuário deletado com sucesso';
};

module.exports = { createUser, getUsers, updateUser, deleteUser };
