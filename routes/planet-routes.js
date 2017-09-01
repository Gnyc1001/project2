const express = require('express');
const planetRouter = express.Router();
const planetController = require('../controllers/planet-controller');
const planetHelper = require(`../services/planet-helper.js`);

planetRouter.get('/', planetHelper.getPlanet, planetController.index);
planetRouter.post('/', planetController.create);

planetRouter.get('/new', (req, res) => {
  res.render('planet/planet-add');
});
planetRouter.get('/:id', planetController.show);
planetRouter.get('/:id/edit', planetController.edit);

planetRouter.put('/:id', planetController.update);
planetRouter.delete('/:id', planetController.delete);

//ads
//planetRouter.get('/', planetController.index);

module.exports = planetRouter;
