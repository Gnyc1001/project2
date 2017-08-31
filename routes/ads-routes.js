const express = require('express');
const adsRouter = express.Router();
const adsController = require('../controllers/ads-controller');

adsRouter.get('/', adsController.index);
//adsRouter.post('/', adsController.create);

// adsRouter.get('/new', (req, res) => {
//   res.render('ads/ads-add');
// });
adsRouter.get('/:id', adsController.show);
// adsRouter.get('/:id/edit', adsController.edit);
// adsRouter.put('/:id', adsController.update);
// adsRouter.delete('/:id', adsController.delete);

module.exports = adsRouter;
