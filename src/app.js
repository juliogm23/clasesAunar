const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const routes = require('./routes/indexRouter')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('App is working'))

app.use('/clasesAunar/src/routes', indexRouter)

app.listen(3000, () => console.log('servidor corriendo 3000!'))

module.exports = {
  app
}