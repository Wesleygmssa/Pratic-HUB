const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'postgres',
  password: 'root',
  port: 5432,
});

/* const createTable = `
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL
  );
`; */
/* pool.query(createTable, (err) => {
    if (err) {
      console.error('Erro ao criar a tabela:', err);
    } else {
      console.log('Tabela criada com sucesso');
    }
  }); */

pool.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao PostgreSQL:', err);
  } else {
    console.log('Conectado ao PostgreSQL!');
  }
});

module.exports = pool;