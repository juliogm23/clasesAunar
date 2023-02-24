import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
/* import apiRouter from './routes/api.routes.js'; */

// Importa las variables de entorno desde el archivo .env
dotenv.config();

const app = express();

// Configura el middleware de registro de solicitudes HTTP
app.use(morgan('dev'));

// Configura la ruta y el controlador
/* app.use('/api', apiRouter); */

// Configura el middleware de manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Error del servidor');
});

// Inicia el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`La API está escuchando en el puerto ${PORT}`);
});
