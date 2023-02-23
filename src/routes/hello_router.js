const express = require("express");
const HelloWorldServices = require("../services/hello_world_service");

const router = express.Router();
const service = new HelloWorldServices();

router.get("/", (req, res) => {
  const greets = service.find();
  res.json(greets);
});

router.get("/greet", (req, res) => {
  res.send("Primera ejecución de la api");
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const greet = service.findOne(id);
  res.json(greet);
});

module.exports = router;
