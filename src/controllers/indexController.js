const { controller } = require('../service/indexService')

const {create} = controller

/*
 * call other imported services, or same service but different functions here if you need to
*/
const Icontrollers = async (req, res, next) => {
  const {user, content} = req.body
  try {
    await create(user, content)
    // other service call (or same service, different function can go here)
    // i.e. - await generateBlogpostPreview()
    res.sendStatus(201)
    next()
  } catch(e) {
    console.log(e.message)
    res.sendStatus(500) && next(error)
  }
}

module.exports = {
  Icontrollers
}
const controller ={}
Icontrollers=(req, res)=>{
    res.send('Aplicacion ejecutando')}

module.exports = controller
