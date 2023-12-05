//import necessary modules required
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//Establishes a connection to the MySQL database
const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
})

//create an "Admin" table if it doesn't already exists
const adminTable = `
  CREATE TABLE IF NOT EXISTS Admin (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
  );
`;
conn.query(adminTable, function (err, res) {
  if (err) {
    console.error('Erreur lors de la création de la table "Admin":', err.message);
  } else {
    console.log('Table created successfully');
  }
});

//function to create a secret JWT token
function generateJWT(user) {
  const secretKey = process.env.JWT_SECRET;
  const token = jwt.sign({ user }, secretKey, { expiresIn: '31d' });
  return token;
}


//Create admin account
const createAdmin = (req, res) => {
  const { user, password } = req.body;

  conn.query('SELECT * FROM Admin WHERE user = ?', [user], (err, result) => {
    //check if user already exist
    if (err) {
      return res.status(500).json({
        error: err,
      })
    }
    if (result.length > 0) {
      return res.status(409).json({
        message: 'Utilisateur déjà existant.'
      })
    }
    //hash (crypt) the password
    const salt = 12;
    bcrypt.hash(password, salt, (err, hash) => {
      if (err) {
        return res.status(500).json({
          error: err,
        })
      }
      const admin = {
        user,
        password: hash,
      }; 

      //insert the admin account into the database
      conn.query('INSERT INTO Admin SET ?', admin, (err, result) => {
        if (err) {
          return res.status(500).json({
            error: err,
          })
        }
        else {
          const token = generateJWT(user);
          return res.status(200).json({
            message: 'Compte créé',
            token: token,
          })
        }
      })
    })
  })
}



//Login with admin account
const loginAdmin = (req, res) => {
  const { user } = req.body;

  //verify if the "authorization" is present
  if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) {
      return res.status(401).json({
          message: "L'autorisation Bearer Token est manquante.",
      });
  }

  //retrieve token JWT
  const token = req.headers.authorization.split(' ')[1];

  //verify token JWT
  jwt.verify(token, process.env.JWT_SECRET, (err) => {
      if (err) {
          return res.status(401).json({
              message: 'Token JWT invalide ou expiré.',
          });
      }

      //search admin account in database with user name
      conn.query('SELECT * FROM Admin WHERE user = ?', [user], (err, result) => {
        const { user, password } = req.body;
        if (err) {
          return res.status(500).json({
            error: err,
          });
        }
  
        //check if the user exists in the database
        if (result.length === 0) {
          return res.status(401).json({
            message: 'Nom d\'utilisateur invalide.',
          });
        }
  
        const admin = result[0];
  
        //verify the password against the stored hashed password
        bcrypt.compare(password, admin.password, (err, isMatch) => {
          if (err) {
            return res.status(500).json({
              error: err,
            });
          }
  
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
        });
      });
    });
  };

module.exports = { createAdmin, loginAdmin };