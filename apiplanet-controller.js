
const apiplanetController = {};

apiplanetController.index = (req, res) => {
  res.json({
    message: 'planet control page',
  });
}

apiplanetController.sendApiPlanet = (req, res) => {
  res.json({
    message: `planet for ${req.params.ppage}`,
    planet: res.locals.planetData,
  })
}

module.exports = apiplanetController;
