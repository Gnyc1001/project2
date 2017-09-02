  require('isomorphic-fetch')

  function getUnit(req, res, next) {

    fetch('https://swapi.co/api/vehicles/?page=1&format=json')
      .then(fetchRes => {
      return fetchRes.json();

    }).then(jsonFetchRes => {
        res.locals.unit = jsonFetchRes.results;
      next();


    }).catch((err) => {
      console.log(err);
      res.locals.pname = 'new unit coming soon'
      res.locals.population = null;
      res.locals.climate = null;
      res.locals.terrain = null;
      next();
    });
  }

  module.exports = { getUnit : getUnit }
