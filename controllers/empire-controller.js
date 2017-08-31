const empire = require('../models/empire');
const user = require('../models/user');

const empireController = {};

  empireController.index = (req, res) => {
  empire.findAll(req.params.id)
    .then(empire => {
      res.render('empire/empire-index', { empire: empire });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  };

  empireController.show = (req, res) => {
    empire.findById(req.params.id)
      .then(empire => {
        res.render('empire/empire-show', { empire: empire });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
    }

  empireController.create = (req, res) => {
  empire.create({
    name: req.body.name,
    model: req.body.model,
    maker: req.body.maker,
    cost: req.body.cost,
    crew: req.body.crew,
    station: req.body.station,
    }, req.user.id)
  .then(empire => {
      res.redirect(`/empire/${empire.userid}`);
    })
    .catch(err => {
    console.log(err);
    res.status(501).json(err);
  });
};

  empireController.edit = ( req, res ) => {
    empire.findById(req.params.id)
      .then(empire => {
        res.render('empire/empire-edit', { empire: empire, });
      })
      .catch(err=> {
        console.log(err);
        res.status(500).json(err);
      });
  }

  empireController.update = ( req, res ) => { //userid: parseInt( req.body.userid )
  empire.update({
    name: req.body.name,
    model: req.body.model,
    maker: req.body.maker,
    cost: req.body.cost,
    crew: req.body.crew,
    station: req.body.station,
  }, req.params.id)
  .then(empire => {
    res.redirect(`/empire/${empire.userid}`);
  })
  .catch(err => {
    console.log(err);
    res.status(502).json(err);
  });
};

  empireController.delete = (req, res) => {
  empire.destroy(req.params.id)
    .then(() => {
      res.redirect('/empire');
    }).catch(err => {
      console.log(err);
      res.status(400).json(err);
      });
    }

module.exports = empireController;
