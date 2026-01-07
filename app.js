require("dotenv").config();
const express = require("express");
//il faut ajouter le module express afin de créer notre webservice, cela permet de gérer les requêtes HTTP et de définir des routes pour notre application.
const cors = require("cors");
//Il faut ajouter le module CORS afin que notre webservice puisse être joint par une application JS, cela permet au back et au front de communiquer entre eux malgré l'origine différente.
const bodyParser = require("body-parser");
//Le middleware body-parser est un outil essentiel dans les applications Express.js qui a pour but principal d'analyser les corps des requêtes entrantes avant qu'elles n'atteignent les gestionnaires de routes.
// Lorsqu'une requête est envoyée à une application, les données sont souvent transmises sous forme de corps de requête, qui peuvent être au format JSON, texte brut, ou encodées en URL.
//Avant que ces données ne puissent être utilisées par le serveur, elles doivent être transformées en un format compréhensible par JavaScript, ce que body-parser effectue automatiquement.
const app = express();
// Middleware qui permet de gérer les requêtes cross-origin c est a dire entre different domaines, les requetes cross origines sont des requêtes HTTP effectuées par un site web vers un domaine différent de celui à partir duquel le site a été chargé.

app.use(cors());

// Routes
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

app.use(bodyParser.json());
app.use("/", indexRouter);
app.use("/users", usersRouter);

// Démarrer le serveur
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});

module.exports = app;
