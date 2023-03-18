const express = require('express')
const router = express.Router()
const controller = require('../controllers/controller')

router.get('/estudiantes', controller.listarEstudiantes)
router.post('/estudiantes', controller.guardarEstudiante)
router.put('/estudiantes/:id', controller.editarEstudiante)
router.delete('/estudiantes/:id', controller.eliminarEstudiante)

module.exports = router


