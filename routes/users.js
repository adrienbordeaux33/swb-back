require("../models/connexion");
const User = require("../models/users");

const newUser = new User({
  username: "admin",
  email: "admin@example.com",
  password: "admin123",
});
newUser.save().then(() => console.log("Utilisateur admin créé"));
