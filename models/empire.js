const db = require('../db/config');

const empire = {};

empire.findAll = () => {
  return db.query('SELECT * FROM empire');
};

empire.findById = (id) => {
  return db.oneOrNone(`
    SELECT * FROM empire
    WHERE id = $1`, [id]);
};

empire.create = (empire, userid) => {
  return db.one(`
    INSERT INTO empire
    (name, model, maker, cost, crew, station, userid)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *
  `, [empire.name, empire.model, empire.maker, empire.cost, empire.crew, empire.station, userid]);
}

empire.update = (empire, id) => {
  return db.one(`
    UPDATE empire SET
    name = $1,
    model = $2,
    maker = $3,
    cost = $4,
    crew = $5,
    station = $6
    WHERE id = $7
    RETURNING *
  `, [empire.name, empire.model, empire.maker, empire.cost, empire.crew, empire.station, id]);
}

empire.destroy = (id) => {
  return db.none(`
    DELETE FROM empire
    WHERE id = $1`, [id]);
};

module.exports = empire;
