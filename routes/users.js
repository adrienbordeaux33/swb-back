var express = require("express");
var router = express.Router();

// Route pour récupérer tous les utilisateurs
router.get("/", (req, res) => {
  res.json({ message: "Liste des utilisateurs" });
});

// Route pour récupérer un utilisateur par ID
router.get("/:id", (req, res) => {
  const userId = req.params.id;
  res.json({ message: `Utilisateur ${userId}` });
});

module.exports = router;
