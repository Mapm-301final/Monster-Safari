-- psql -d myDataBase -a -f myInsertFile.sql

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS pokefound;
DROP TABLE IF EXISTS poke;


-- holds all pokemon qualities and history of all poke found. Will not store duplicates
CREATE TABLE IF NOT EXISTS poke (
id SERIAL PRIMARY KEY,
name VARCHAR(20), 
type VARCHAR(255),
icon VARCHAR(255),
img VARCHAR(550), 
location VARCHAR(255),
date_encounterd VARCHAR(255)
);