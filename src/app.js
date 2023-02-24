const express = require('express')
const { route } = require('./routes/index.routes')
const app = express()

//ROUTES
//const routes = require('./routes/index.routes')
//app.use(routes)
app.use(require('./routes/index.routes'))

app.listen(3000, ()=> {
    console.log('Servidor a la espera de conexiones')
})