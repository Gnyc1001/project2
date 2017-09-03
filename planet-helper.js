  require('isomorphic-fetch');


  function getPlanet(req, res, next) {

    fetch('https://swapi.co/api/planets/?page=1&format=json')
      .then(fetchRes => {
      return fetchRes.json();

    }).then(jsonFetchRes => {
        res.locals.data = jsonFetchRes.results;
      next();

    }).catch((err) => {
      console.log(err);
      res.locals.pname = 'new planet coming soon'
      res.locals.population = null;
      res.locals.climate = null;
      res.locals.terrain = null;
      next();
    });
  }

  module.exports = { getPlanet : getPlanet }
