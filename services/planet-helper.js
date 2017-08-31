require('isomorphic-fetch')

function getPlanet(req, res, next) {
  fetch('https://swapi.co/api/planets/?format=json',{
  }
  })
    .then((fetchRes) => {
      return fetchRes.json();
    }).then((jsonFetchRes) => {
      res.locals.pname = jsonFetchRes.results[1].name;
      res.locals.population = jsonFetchRes.results[1].population;
      res.locals.climate = jsonFetchRes.results[1].climate;
      res.locals.terrain = jsonFetchRes.results[1].terrain;
      next();
    }).catch((err) => {
      console.log(err);
      res.locals.pname = 'new planet coming soon'
      res.locals.population = null
      res.locals.climate =
      res.locals.terrain =
      next();
    });
  }

  module.exports = { getPlanet :getPlanet }
