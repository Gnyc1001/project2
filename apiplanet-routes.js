const express = require('express');
const apiplanetRouter = express.Router();
const planetHelper = require(`../services/planet-helper`);

apiplanetRouter.get('/', planetHelper.getPlanet, (req, res) => {
  res.render('planet/apiplanet-index');
});

module.exports = apiplanetRouter;
