const db = require('../db/config');

const planet = {};

planet.findAll = () => {
  return db.query('SELECT * FROM planet');
};

planet.findById = (id) => {
  return db.oneOrNone(`
    SELECT * FROM planet
    WHERE id = $1`, [id]);
};

planet.create = (planet) => {
  return db.one(`
    INSERT INTO planet
    (pname, population, climate, terrain, control)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
  `, [planet.pname, planet.population, planet.climate, planet.terrain, planet.control]);
}

planet.update = (planet, id) => {
  return db.one(`
    UPDATE planet SET
    pname = $1,
    population = $2,
    climate = $3,
    terrain = $4,
    control = $5
    WHERE id = $6
    RETURNING *
  `, [planet.pname, planet.population, planet.climate, planet.terrain, planet.control, id]);
}

planet.destroy = (id) => {
  return db.none(`
    DELETE FROM planet
    WHERE id = $1`, [id]);
};

module.exports = planet;
