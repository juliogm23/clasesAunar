const controller = {}

controller.index = (req, res) => {
    res.send('Primera ejecución de la api')
}

module.exports = controller