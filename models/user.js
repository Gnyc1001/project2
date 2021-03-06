const db = require('../db/config');

const User = {};

User.findByUserName = userName => {
  return db.oneOrNone(`
    SELECT * FROM users WHERE username = $1`, [userName]);
};

User.findbyUserEmpire = id => {
  return db.manyOrNone(`
    SELECT * FROM empire WHERE userid = $1`, [id]);
};

User.findbyUserPlanet = id => {
  return db.manyOrNone(`
    SELECT * FROM planet WHERE userid = $1`, [id]);
};



User.create = user => {
  return db.one(`
    INSERT INTO users (username, email, password_digest)
    VALUES ($1, $2, $3) RETURNING *
  `, [user.username, user.email, user.password_digest]);
};

module.exports = User;
