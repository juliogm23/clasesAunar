const express = require("express");

/*const controllers = require('../controllers/indexController')*/
const controller = require("../controllers/indexController");

const router = express.Router();

router.post("/", controller.Icontrollers);
router.post("/createUser", controller.createUser);
// Editar un estudiante existente
router.put("/:id", estudiantesController.editarEstudiante);

// Eliminar un estudiante existente
router.delete("/:id", estudiantesController.eliminarEstudiante);

// Listar todos los estudiantes
router.get("/", estudiantesController.listarEstudiantes);

// Agregar un nuevo estudiante
router.post("/", estudiantesController.agregarEstudiante);

//router.post('#', estudiantesController);
module.exports = router;
