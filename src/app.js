const express = require('express')
const sequelize = require('./db_conf/database')
const api = require('./routes/index.routes')
const app = express()


//coneccion a la base de datos//
try {
    sequelize.authenticate();
  
    console.log('La conexión se ha establecido correctamente.');
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  }


//ROUTES

//const routes = require('./routes/index.routes')
//app.use(routes)
app.use('/', api)

app.listen(3000, ()=> {
    console.log('Servidor a la espera de conexion')
})


