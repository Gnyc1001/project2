
const apiplanetController = {};

apiplanetController.index = (req, res) => {
  res.json({
    message: 'planet control page',
  });
}

apiplanetController.sendApiPlanet = (req, res) => {
  res.json({
    message: `Weather for ${req.params.ppage}`,
    planet: res.locals.weatherData,
  })
}

module.exports = apiplanetController;
