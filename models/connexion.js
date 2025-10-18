const mongoose = require("mongoose");

const connectionString =
  process.env.CONNECTION_STRING + process.env.DATABASE_NAME;

mongoose
  .connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log("DB SwB bien connectée !*_*!"))
  .catch((error) => console.error("DB SwB error :", error));
