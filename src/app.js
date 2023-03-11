const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const sequelize = require("./database/sequelize");
const api = require("./routes/indexRouter");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", api);

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

app.listen(3000, () => console.log("El servidor ha empezado a correr!"));
