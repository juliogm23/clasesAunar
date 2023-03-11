const estudiantes = require("../models/estudiantes-model");
const Icontrollers = {};

Icontrollers.index = async (req, res) => {
  const d = await estudiantes.findAll();
  res.send(d);
};
module.exports = {
  Icontrollers,
};
