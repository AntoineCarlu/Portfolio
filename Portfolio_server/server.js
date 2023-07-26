require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth.route')
const cors = require('cors');

//Midlewares
const app = express();

app.use(cors({
  origin: 'http://127.0.0.1:3001',
  optionsSuccessStatus: 200
}));

app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

//utiliser les routes
app.use('/', authRoutes);

//connexion à la base de données
const connectDb = require('./config/db')

//lancement du server

const start = async () => {
  try {
    await connectDb();
    const port = process.env.PORT || 3101;
    app.listen(port, () => {
      console.log('Le serveur a démarré sur le port '+port);
    })
  } catch (error) {
    console.error('Erreur lors de la connexion à la base de données', err);
  }
}
start();