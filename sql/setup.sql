-- psql d6utp3cpqe114p -h ec2-107-20-195-181.compute-1.amazonaws.com -U xnzvxarflygeqw -W (to connect to heroku database)
-- database name daianaventoni

DROP TABLE IF EXISTS signatures;

CREATE TABLE cursos (
    id SERIAL primary key,
    title VARCHAR(255),
    description TEXT,
    imgUrl TEXT,
    price VARCHAR(255),
    date VARCHAR(255),
    pagamento VARCHAR(255),
    timestamp TIMESTAMP default current_timestamp
);
