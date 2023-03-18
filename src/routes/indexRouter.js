const express = require("express");

/*const controllers = require('../controllers/indexController')*/
const controller = require("../controllers/indexController");

const router = express.Router();

router.post("/", controller.Icontrollers);
router.post("/createUser", controller.createUser);
// Editar un estudiante existente
rouer.put("/:id", controller.edit);
router.put("/:id", controller.editarEstudiante);

// Eliminar un estudiante existente
router.delete("/:id", controller.eliminarEstudiante);

// Listar todos los estudiantes
router.get("/", controller.listarEstudiantes);

// Agregar un nuevo estudiante
router.post("/", controller.agregarEstudiante);

//router.post('#', estudiantesController);
module.exports = router;
