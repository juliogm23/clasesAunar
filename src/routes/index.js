const helloRouter = require("./hello_router");

function routerApi(app) {
  app.use("/hello", helloRouter);
}

module.exports = routerApi;
