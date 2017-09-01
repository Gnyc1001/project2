const planet = require('../models/planet');
const planetController = {};

  planetController.index = (req, res) => {
    planet.findAll(req.paramas.id)
    .then(planet => {
      res.render('planet/planet-index', {planet: planet });
      })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  };

  planetController.show = (req, res) => {
    planet.findById(req.params.id)
      .then(planet => {
        res.render('planet/planet-show', { planet: planet });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
    }

  planetController.create = (req, res) => {
    planet.create({
      pname: res.locals.pname,
      population: res.locals.population,
      climate: res.locals.climate,
      terrain: res.locals.terrain,
      })
      .then(planet => {
        res.json({
          message: 'planet created successfully',
          planet: planet,
      })
    })
      .catch(err => {
      console.log(err);
        res.status(501).json(err);
    });
  };

  planetController.edit = ( req, res ) => {
    planet.findById(req.params.id)
      .then(planet => {
        res.render('planet/planet-edit', { planet: planet, });
      })
      .catch(err=> {
        console.log(err);
        res.status(500).json(err);
      });
    }

  planetController.update = ( req, res ) => {
    planet.update({
      pname: req.body.pname,
      population: req.body.population,
      climate: req.body.climate,
      terrain: req.body.terrain,
      control: req.body.control,
    }, req.params.id)
    .then(planet => {
        res.redirect(`/planet/${planet.id}`);
    })
    .catch(err => {
      console.log(err);
        res.status(502).json(err);
    });
  };

  planetController.delete = (req, res) => {
  planet.destroy(req.params.id)
    .then(() => {
      res.redirect('/planet');
    }).catch(err => {
      console.log(err);
      res.status(400).json(err);
      });
    }

// ads
//       planetController.index = (req, res) => {
//   ads.findAll()
//     .then(ads => {
//       res.render('planet/planet-index', { ads: ads });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
//   };

module.exports = planetController;
