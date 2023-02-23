const express = require("express");
const faker = require;

const router = express.Router();

router.get("/", (req, res) => {
  try {
    res.send("Primera ejecución de la api");
  } catch (e) {
    console.log(e);
  }
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: "none",
    price: 200,
  });
});

module.exports = router;
