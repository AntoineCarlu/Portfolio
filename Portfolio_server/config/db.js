const { MongoClient } = require('mongodb');
require('dotenv').config();

const connectDb = async () => {
  try {
    const client = new MongoClient(process.env.DB_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await client.connect();

    console.log('Connection à la base de données réussie !')
    return client;
  } catch(err) {
    console.error('Erreur lors de la connexion avec la base de données', err);
    throw err;
  }
};

module.exports = connectDb;
