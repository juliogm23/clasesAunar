const estudiantes = require("../models/estudiantes-model");
// const estudiantes = require("../models/estudiantes-model");
const estudiantesController = require("../controllers/estudiantes-model");
exports.Icontrollers = async (req, res) => {
  const d = await estudiantes.findAll();
  res.send(d);
};

exports.createUser = async (req, res) => {
  await estudiantes.create({
    nombre: "Yorle",
    apellido: "Ruiz",
    tipo_documento: "cedula ciudadania",
    numero_documento: "1234567890",
    correo: "yorlerv@gmail.com",
    celular: "3002969298",
    id_estudiante: "12345",
    estado_financiero: "paz y salvo",
    id_financiero: "123453002969298",
    estado_matricula: "matriculado",
    carrera: "ingenieria informatica",
    direccion: "Vista Hermosa",
  });
};

//editar estudiante
estudiantesController.edit = async (req, res, next) => {
  const { id, user, content } = req.body;
  try {
    const estudiante = await estudiantes.findByPk(id);
    if (!estudiante) {
      res.sendStatus(404);
      return;
    }
    await estudiante.update({ user, content });
    res.sendStatus(200);
    next();
  } catch (error) {
    console.log(error.message);
    res.sendStatus(500) && next(error);
  }
};

//eliminar estudiante
estudiantesController.delete = async (req, res, next) => {
  const { id } = req.body;
  try {
    const estudiante = await estudiantes.findByPk(id);
    if (!estudiante) {
      res.sendStatus(404);
      return;
    }
    await estudiante.destroy();
    res.sendStatus(200);
    next();
  } catch (error) {
    console.log(error.message);
    res.sendStatus(500) && next(error);
  }
};
//agregar un estudiante
// const estudiantes = require("../models/estudiantes-model");

// const estudiantesController = {};

estudiantesController.agregarEstudiante = async (req, res, next) => {
  const { nombre, edad, carrera } = req.body;
  try {
    await estudiantes.create({ nombre, edad, carrera });
    res.sendStatus(201);
    next();
  } catch (error) {
    console.log(error.message);
    res.sendStatus(500) && next(error);
  }
};
