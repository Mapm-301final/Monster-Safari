-- psql -d myDataBase -a -f myInsertFile.sql

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS pokefound;
DROP TABLE IF EXISTS poke;

-- Holds a list of users
CREATE TABLE IF NOT EXISTS users (
id SERIAL PRIMARY KEY,
username VARCHAR(20)
);

-- holds username, date of encounter, weather when found, location where found, and ref id of pokeman in poke table
CREATE TABLE IF NOT EXISTS pokefound (
id SERIAL PRIMARY KEY,
user_id NUMERIC,
poke_id NUMERIC, 
date_encounterd VARCHAR(255), 
weather VARCHAR(255), 
location VARCHAR(50)
);

-- holds all pokemon qualities and history of all poke found. Will not store duplicates
CREATE TABLE IF NOT EXISTS poke (
id SERIAL PRIMARY KEY,
poke_name VARCHAR(20), 
image_url VARCHAR(255), 
type NUMERIC
);