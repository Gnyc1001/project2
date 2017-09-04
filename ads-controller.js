const ads = require('../models/ads');
const adsController = {};

  adsController.index = (req, res) => {
  ads.findAll()
    .then(ads => {
      res.render('dashboard/dashboard', { ads: ads });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  };

  adsController.show = (req, res) => {
    ads.findById(req.params.id)
      .then(ads => {
        res.render('ads/ads-show', { ads: ads });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  }


module.exports = adsController;
