const express = require('express');
const apiplanetRouter = express.Router();
//const apiplanetController = require('../controllers/apiplanet-controller');
const planetHelper = require(`../services/planet-helper`);


apiplanetRouter.get('/', planetHelper.getPlanet, (req, res) => {
  res.render('planet/apiplanet-index');
});

//apiplanetRouter.get('/:ppage', planetHelper.getPlanet, apiplanetController.sendApiPlanet);

module.exports = apiplanetRouter;
