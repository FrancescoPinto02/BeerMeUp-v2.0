USE BeerMeUp;

INSERT INTO Breweries (name, location, website, nationality, description)
VALUES
    ('Birrificio Roma', 'Rome, Italy', 'http://www.birrificioroma.it', 'Italian', 'A local brewery in Rome specializing in craft beers'),
    ('BrewDog', 'Ellon, Scotland', 'https://www.brewdog.com', 'Scottish', 'A well-known craft brewery based in Scotland'),
    ('Sierra Nevada Brewing Co.', 'Chico, California, USA', 'https://sierranevada.com', 'American', 'One of America''s pioneering craft breweries');

INSERT INTO Colors (name)
VALUES
    ('Blonde'),
    ('Amber'),
    ('Brown'),
    ('Black');

INSERT INTO Styles (name, description)
VALUES
    ('IPA', 'India Pale Ale'),
    ('Stout', 'Dark, rich beer brewed with roasted malt or roasted barley, hops, water, and yeast'),
    ('Pilsner', 'A crisp, clean, and refreshing lager beer, often with a slightly bitter taste'),
    ('Pale Ale', 'A hoppy beer style within the broader category of ale');

INSERT INTO Beers (breweryID, styleID, colorID, name, abv, ibu, price, stock, description)
VALUES
    (1, 1, 1, 'Roma IPA', 6.5, 45, 5.99, 100, 'A classic IPA brewed by Birrificio Roma with a balanced hop bitterness and citrusy aroma'),
    (2, 2, 3, 'Punk IPA', 5.6, 35, 6.99, 150, 'BrewDog''s flagship IPA, bursting with fruity hop aroma and a clean, dry finish'),
    (3, 4, 2, 'Sierra Nevada Pale Ale', 5.6, 38, 7.49, 120,'An American classic, Sierra Nevada Pale Ale is a well-balanced and full-bodied ale with a distinctive hop aroma');

SELECT * FROM Breweries;
SELECT * FROM Colors;
SELECT * FROM Styles;
SELECT * FROM Beers;