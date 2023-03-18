const estudiantes = require("../models/estudiantes-model");

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
