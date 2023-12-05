//import necessary modules required
const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

//Establishes a connection to the MongoDB database
const connectDb = require('../config/db');

//function to create a secret JWT token
function generateJWT(user) {
  const secretKey = process.env.JWT_SECRET;
  const token = jwt.sign({ user }, secretKey, { expiresIn: '31d' });
  return token;
}



//Create admin account
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

      //generate JWT token and send the response
      const token = generateJWT(user);
      return res.status(200).json({
        message: 'Compte créé',
        token: token,
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



//Login with admin account
const loginAdmin = async (req, res) => {
  const { user, password } = req.body;
  let client;

  // //verify if the "authorization" is present
  // if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) {
  //   return res.status(401).json({
  //     message: "L'autorisation Bearer Token est manquante.",
  //   });
  // }

  // //retrieve token JWT
  // const token = req.headers.authorization.split(' ')[1];

  // //verify token JWT
  // jwt.verify(token, process.env.JWT_SECRET, (err) => {
  //   if (err) {
  //     return res.status(401).json({
  //       message: 'Token JWT invalide ou expiré.',
  //     });
  //   }

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
      const isMatch = await bcrypt.compare(password, admin.password);

      //check if the password is correct
      if (!isMatch) {
        return res.status(401).json({
          message: 'Mot de passe incorrect.',
        });
      }

      //if username and password are correct, generate a new JWT and send the response
      const token = generateJWT(user);
      return res.status(200).json({
        message: 'Connecté avec succès',
        token: token,
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