--CREATE DATABASE empire_db;

--\c empire_db;

CREATE TABLE IF NOT EXISTS empire (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  model VARCHAR(70),
  maker VARCHAR (120),
  cost INTEGER NOT NULL,
  crew INTEGER NOT NULL,
  station VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_digest TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS planet (
  id SERIAL PRIMARY KEY,
  pname VARCHAR(50) NOT NULL,
  population VARCHAR(1024) NOT NULL,
  climate text,
  terrain text,
  control VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS ads (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  picture VARCHAR(1024)
);

ALTER TABLE empire
ADD COLUMN userid INTEGER REFERENCES users(id);

ALTER TABLE planet
ADD COLUMN userid INTEGER REFERENCES users(id);

\i ../seeds/empire.sql
\i ../seeds/planet.sql
\i ../seeds/ads.sql
