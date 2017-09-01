const express = require('express');
const planetRouter = express.Router();
const planetController = require('../controllers/planet-controller');
const planetHelper = require(`../services/planet-helper`);

planetRouter.get('/', planetHelper.getPlanet, (req, res) => {
  res.render('planet/apiplanet-index');
});
//planetRouter.get('/:id/edit', planetController.edit);
// planetRouter.get('/new', (req, res) => {
//   res.render('planet/planet-add');
// });
planetRouter.get('/:id', planetController.show);
planetRouter.post('/', planetController.create);
planetRouter.put('/:id', planetController.update);
planetRouter.delete('/:id', planetController.delete);

module.exports = planetRouter;
