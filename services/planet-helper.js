  require('isomorphic-fetch')

  function getPlanet(req, res, next) {
    fetch('https://swapi.co/api/planets/?page=1&format=json')
      .then(fetchRes => { console.log('getPlanet');
      return fetchRes.json();

    }).then(jsonFetchRes => {
      for(i = 0; i < jsonFetchRes.results.length; i++){
      res.locals.pname = jsonFetchRes.results[i].name;
      res.locals.population = jsonFetchRes.results[i].population;
      res.locals.climate = jsonFetchRes.results[i].climate;
      res.locals.terrain = jsonFetchRes.results[i].terrain;
      res.locals.control = 'undefined';
     }
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
