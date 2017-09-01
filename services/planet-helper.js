require('isomorphic-fetch')

function getPlanet(req, res, next) {
  fetch('https://swapi.co/api/planets/?page=1&format=json')
    .then(fetchRes => {
      return fetchRes.json();
    }).then(jsonFetchRes => {
        //for(i = 0; i < results.length; i++);
      res.locals.pname = jsonFetchRes.results[0].name;
      res.locals.population = jsonFetchRes.results[0].population;
      res.locals.climate = jsonFetchRes.results[0].climate;
      res.locals.terrain = jsonFetchRes.results[0].terrain;
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

  module.exports = { getPlanet :getPlanet }
