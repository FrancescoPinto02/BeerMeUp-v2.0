DROP SCHEMA IF EXISTS BeerMeUp;
CREATE SCHEMA BeerMeUp;
USE BeerMeUp;

CREATE TABLE Breweries(
    id INT AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    location VARCHAR(255),
    website VARCHAR(255),
    nationality VARCHAR(50),
    description VARCHAR(1024),

    PRIMARY KEY (id)
);

CREATE TABLE Colors(
    id INT AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,

    PRIMARY KEY (id)
);

CREATE TABLE Styles(
    id INT AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    description VARCHAR (1024),

    PRIMARY KEY (id)
);

CREATE TABLE Beers(
	id INT AUTO_INCREMENT,
	breweryID INT NOT NULL,
	styleID INT NOT NULL,
	colorID INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    abv DECIMAL(4,2) NOT NULL,
    ibu INT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock INT NOT NULL DEFAULT 1,
    img VARCHAR(255),
    description VARCHAR(1024),

    PRIMARY KEY (id),
    FOREIGN KEY (breweryID) REFERENCES Breweries(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    FOREIGN KEY (styleID) REFERENCES Styles(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    FOREIGN KEY (colorID) REFERENCES Colors(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);
