const express = require("express");

/*const controllers = require('../controllers/indexController')*/
const { Icontrollers } = require("../controllers/indexController");

const router = express.Router();

router.post("/", Icontrollers);

module.exports = router;
