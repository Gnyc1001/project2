const express = require('express');
const nasaRouter = express.Router();

const nasaController = require('../controllers/nasa-controller');
const nasaHelper = require('../services/weather/nasa-helper');

nasaRouter.get('/',nasaController.index);

nasaRouter.get('/', nasaController.nasaApi, nasaController.index);

module.exports = nasaRouter;
