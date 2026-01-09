require("../models/connexion");
const express = require("express");
const router = express.Router();
const User = require("../models/users");

// Exemple de route GET
router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

const newUser = new User({
  username: "nom d'utilisateur",
  email: "exemple@email.com",
  password: "motdepasse",
});
newUser.save().then(() => console.log("Utilisateur créé"));

module.exports = router;
