const express = require("express");
const {
  getHelloWorldController,
  getsHelloWorldController,
  greetHellowController,
} = require("../controllers/hello_world_controller");

const router = express.Router();

router.get("/", getsHelloWorldController);

router.get("/greet", greetHellowController);

router.get("/:id", getHelloWorldController);

module.exports = router;
