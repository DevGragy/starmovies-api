CREATE DATABASE starmoviesapi;
USE starmoviesapi;

CREATE TABLE Users(
    userName VARCHAR(20) PRIMARY  KEY,
    firstName VARCHAR(30) NOT NULL,
    lastName VARCHAR(30) NOT NULL,
    roles VARCHAR(20),
    email VARCHAR(40) NOT NULL,
    passwords VARCHAR(30) NOT NULL
);

CREATE TABLE Admins(
    adminName VARCHAR(20) PRIMARY KEY ,
    firstName VARCHAR(30) NOT NULL,
    lastName VARCHAR(30) NOT NULL,
    roles VARCHAR(20),
    email VARCHAR(40) NOT NULL,
    passwords VARCHAR(30) NOT NULL
);

CREATE TABLE Movies(
    idMovie INT PRIMARY KEY,
    idCategory INT NOT NULL,
    title VARCHAR(25) NOT NULL,
    years INT, 
    rating VARCHAR(5) NOT NULL,
    languages VARCHAR(20),
    director VARCHAR(25) NOT NULL,
    descriptions VARCHAR(50) NOT NULL,
    FOREIGN KEY (idCategory) REFERENCES Category(idCategory)
);

CREATE TABLE Category(
    idCategory INT PRIMARY KEY,
    category VARCHAR(25) NOT NULL,
    descriptions VARCHAR(50) NOT NULL
);

CREATE TABLE Review(
    idReview INT PRIMARY KEY,
    idMovie INT NOT NULL,
    userName VARCHAR(20) NOT NULL,
    review VARCHAR(50) NOT NULL,
    rating VARCHAR(5) NOT NULL,
    FOREIGN KEY (idMovie) REFERENCES Movies(idMovie),
    FOREIGN KEY (userName) REFERENCES Users(userName)
);

CREATE TABLE Favorite(
    idFavorite INT PRIMARY KEY,
    idMovie INT NOT NULL,
    userName VARCHAR(20) NOT NULL,
    FOREIGN KEY (idMovie) REFERENCES Movies(idMovie),
    FOREIGN KEY (userName) REFERENCES Users(userName)
);