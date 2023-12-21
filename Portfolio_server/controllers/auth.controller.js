//import necessary modules required
// const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
require('dotenv').config();

//Establishes a connection to the MongoDB database
const connectDb = require('../config/db');



//Function to create admin account
const createAdmin = async (req, res) => {
  const { user, password } = req.body;
  let client;

  try {
    //connect to MongoDB database
    client = await connectDb();

    //get the "admin" collection
    const adminCollection = client.db(process.env.DB_NAME).collection('Admin');

    //check if user already exist
    const checkUser = await adminCollection.findOne({ user });
    if (checkUser) {
      return res.status(409).json({
        message: 'Utilisateur déjà existant.',
      });
    }

    //hash (crypt) the password
    const salt = 12;
    const hash = await bcrypt.hash(password, salt);
      const admin = {
        user,
        password: hash,
      };

      //insert the admin account into the database
      await adminCollection.insertOne(admin);

      //send the response
      return res.status(200).json({
        message: 'Compte créé',
      });
  } catch (err) {
    console.error('Erreur lors de la création du compte admin', err);
    return res.status(500).json({
      error: err.message,
    });
  } finally {
    //close the MongoDB connection
    client.close();
  }
};



//Function to login with admin account
const loginAdmin = async (req, res) => {
  const { user, password } = req.body;
  let client;

  //search admin account in database with user name
  try {
    //connect to MongoDB database
    client = await connectDb();

    //get the "admin" collection
    const adminCollection = client.db(process.env.DB_NAME).collection('Admin');

    //check for the admin account in the database by username
    const admin = await adminCollection.findOne({ user });

    //check if the username is correct
    if (!admin) {
      return res.status(401).json({
        message: 'Nom d\'utilisateur invalide.',
      });
    }

    //verify the password against the stored hashed password
    const passwordMatch = await bcrypt.compare(password, admin.password);

    //check if the password is correct
    if (!passwordMatch) {
      return res.status(401).json({
        message: 'Mot de passe incorrect.',
      });
    }

    //if username and password are correct, send the response
    return res.status(200).json({
      message: 'Connecté avec succès',
    }); 
  } catch (err) {
    console.error('Erreur lors du login admin', err);
    return res.status(500).json({
      error: err.message,
    });
  } finally {
    // Close the MongoDB connection
    client.close();
  }
};

module.exports = { createAdmin, loginAdmin };
