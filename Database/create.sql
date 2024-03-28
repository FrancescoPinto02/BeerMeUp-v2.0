DROP SCHEMA IF EXISTS BeerMeUp;
CREATE SCHEMA BeerMeUp;
USE BeerMeUp;

CREATE TABLE Beer(
	id INT AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    style VARCHAR(50) NOT NULL,

    PRIMARY KEY (id)
);

INSERT INTO Beer(name, style)
VALUES 	('Bella Bionda', 'Pilsner'),
		('Bionda Selvaggia', 'Weizen'),
        ('Rossa Fuoco', 'Amber');

SELECT * FROM Beer;