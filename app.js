require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
//Il faut ajouter le module CORS afin que notre webservice puisse être joint par une application JS.

// Routes
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

app.use("/", indexRouter);
app.use("/users", usersRouter);

// Démarrer le serveur
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});

module.exports = app;
