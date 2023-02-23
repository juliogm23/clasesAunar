const HelloWorldServices = require("../services/hello_world_service");

const service = new HelloWorldServices();

const getsHelloWorldController = (req, res) => {
  const greets = service.find();
  res.json(greets);
};

const getHelloWorldController = (req, res) => {
  const { id } = req.params;
  const greet = service.findOne(id);
  res.json(greet);
};

const greetHellowController = (req, res) => {
    res.send("Primera ejecución de la api");
}

module.exports = { getHelloWorldController, getsHelloWorldController, greetHellowController };
