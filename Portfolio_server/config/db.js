const mysql = require('mysql2');
require('dotenv').config();

const connectDb = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT,
    });
    console.log('Connection à la base de données réussie !')
    return connection;
  } catch(err) {
    console.error('Erreur lors de la connexion avec la base de données', err);
  }
};

module.exports = connectDb;