const express = require('express');
const apiempireRouter = express.Router();
const empireHelper = require(`../services/empire-helper`);

apiempireRouter.get('/', empireHelper.getUnit, (req, res) => {
  res.render('empire/apiempire-index');
});

module.exports = apiempireRouter;
