var express = require("express");
var router = express.Router();

//"router.get" précise le type de la route
//"date" correspond au nom de la route
//"res.json({ now: date })" est égal au résultat de la requête au format JSON

router.get("/date", (req, res) => {
  const date = new Date();
  res.json({ "date du jour": date });
});

module.exports = router;
