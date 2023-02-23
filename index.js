const express = require("express");
const routerApi = require("./src/routes");

const app = express();
const port = 3000;

// app.get("/", (req, res) => {
//   res.send("Primera ejecución de la api");
// });

routerApi(app);

// app.get("/nueva_ruta", (req, res) => {
//   res.send("Hola esto desde la nueva ruta");
// });

app.listen(port, () => {
  console.log("Mi puerto: " + port);
});
