const db = require('../db/config');

const ads = {};

ads.findAll = () => {
  return db.query('SELECT * FROM ads');
};

ads.findById = (id) => {
  return db.oneOrNone(`
    SELECT * FROM ads
    WHERE id = $1`, [id]);
};

module.exports = ads;
