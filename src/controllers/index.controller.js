const estudiantes = require('../models/estudiantes')

const controller = {}

controller.listarEstudiantes = async (req, res) => {
  const estudiantesList = await estudiantes.findAll()
  res.send(estudiantesList)
}

controller.guardarEstudiante = async (req, res) => {
  const { nombre, apellido, tip_documento, num_documento, correo, carrera } = req.body
  await estudiantes.create({
    nombre,
    apellido,
    tip_documento,
    num_documento,
    correo,
    carrera
  })
  res.send('Estudiante guardado exitosamente')
}

controller.editarEstudiante = async (req, res) => {
  const { id } = req.params
  const { nombre, apellido, tip_documento, num_documento, correo, carrera } = req.body
  const estudiante = await estudiantes.findByPk(id)
  if (!estudiante) {
    return res.status(404).send('El estudiante no existe')
  }
  await estudiante.update({
    nombre,
    apellido,
    tip_documento,
    num_documento,
    correo,
    carrera
  })
  res.send('Estudiante actualizado exitosamente')
}

controller.eliminarEstudiante = async (req, res) => {
  const { id } = req.params
  const estudiante = await estudiantes.findByPk(id)
  if (!estudiante) {
    return res.status(404).send('El estudiante no existe')
  }
  await estudiante.destroy()
  res.send('Estudiante eliminado exitosamente')
}

module.exports = controller
