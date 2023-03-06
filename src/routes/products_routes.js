const express = require("express");
const {
  getsProductController,
  getProductController,
  postProductController,
  patchProductController,
  deleteProductController,
} = require("../controllers/products_controller");

const {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
} = require("../schemas/product_schema");
const validatorHandler = require("../middlewares/validator_handler");

const router = express.Router();

router.get("/", getsProductController);

// router.get("/filter", (req, res) => {
//   res.send("Yo soy un filter");
// });

router.get(
  "/:id",
  validatorHandler(getProductSchema, "params"),
  getProductController
);

router.post(
  "/",
  validatorHandler(createProductSchema, "body"),
  postProductController
);

router.patch(
  "/:id",
  validatorHandler(getProductSchema, "params"),
  validatorHandler(updateProductSchema, "body"),
  patchProductController
);

router.delete(
  "/:id",
  validatorHandler(getProductSchema, "params"),
  deleteProductController
);

module.exports = router;
