const Icontrollers = async (req, res, next) => {
  const { user, content } = req.body;
  try {
    await create(user, content);
    res.sendStatus(201);
    next();
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500) && next(error);
  }
};

module.exports = {
  Icontrollers,
};
