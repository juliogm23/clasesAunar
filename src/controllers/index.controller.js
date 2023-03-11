const estudiantes = require('../models/estudiantes')


const controller = {}

controller.index = async (req, res) => {

    const d = await estudiantes.findAll()
    res.send(d)
}

controller.guardarEstudiante = async (req, res) => {
    await estudiantes.create({
        nombre: 'alice123', 
        apellido: 'martinez', 
        tip_documento: 'cedula de ciudadania',
        num_documento: '12345678899', 
        correo: 'alicemartinez@gmail.com', 
        carrera: 'contaduria',
      }, { fields: ['nombre','apellido','tip_documento','num_documento','correo','carrera'] });
}

  
module.exports = controller