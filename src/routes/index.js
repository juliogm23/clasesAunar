const express = require("express");

const helloRouter = require("./hello_router");
const productsRouter = require("./products_routes");

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/products", productsRouter);
  // app.use("/hello", helloRouter);
}

module.exports = routerApi;
