-- psql d6utp3cpqe114p -h ec2-107-20-195-181.compute-1.amazonaws.com -U xnzvxarflygeqw -W (to connect to heroku database)

DROP TABLE IF EXISTS signatures;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS users_profiles;

CREATE TABLE signatures (
    id SERIAL primary key,
    signature TEXT,
    user_id INTEGER not null,
    timestamp TIMESTAMP default current_timestamp
);

CREATE TABLE users (
    id SERIAL primary key,
    firstname VARCHAR(255) not null,
    lastname VARCHAR(255) not null,
    email TEXT not null unique,
    password VARCHAR(255),
    timestamp TIMESTAMP default current_timestamp
);

CREATE TABLE users_profiles (
    id SERIAL primary key,
    age INTEGER,
    city VARCHAR(255),
    country VARCHAR(255),
    website VARCHAR(255),
    user_id INTEGER not null,
    timestamp TIMESTAMP default current_timestamp
);
