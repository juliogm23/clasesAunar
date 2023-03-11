const { controller } = require("../service/indexService");

const { create } = controller;

const Icontrollers = async (req, res, next) => {
  const { user, content } = req.body;
  try {
    await create(user, content);
    res.sendStatus(201);
    next();
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500) && next(error);
  }
};

module.exports = {
  Icontrollers,
};
const controller = {};
Icontrollers = (req, res) => {
  res.send("Aplicacion ejecutando");
};

module.exports = controller;
