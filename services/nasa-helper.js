  require('isomorphic-fetch');
  require('dotenv').config();

  const API_KEY = process.env.API_KEY;

  function getWeatherFromAPI(req, res, next) {
    fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-09-07&end_date=2017-09-08&api_key=${API_KEY}`)
      .then(fetchRes => fetchRes.json())
      .then(jsonRes => {
        console.log(jsonRes.main);
        res.locals.nasa = jsonRes.main;
      next();
      }).catch(err => {
        console.log(err);
        next();
      })
    }

    module.exports = { nasaApi,
  }
