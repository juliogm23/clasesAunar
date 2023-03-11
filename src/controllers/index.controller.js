const estudiantes = require('../models/estudiantes')


const controller = {}

controller.index = async (req, res) => {

    const d = await estudiantes.findAll()
    res.send(d)
}

module.exports = controller