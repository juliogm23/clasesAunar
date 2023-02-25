import express from 'express'
const app = express()

app.listen('3000', function(){
  console.log('Servidor corriendo en el puerto 3000')
} )

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function(req, res){
  res.send('todo va bien')
})