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


INSERT INTO Users VALUES (“Chris74”,“Chris”,“Mendoza Maldonado”,“”,“chris_mm@gmail.com”,“Taquitou”);
    
INSERT INTO Users VALUES (“Chofis99”,“Ana Sofia”,“Ortega Sanchez”,“”,“lachifis@gmail.com”,“cerezitaSanchez99”);
    
INSERT INTO Users VALUES (“CrackMLC”,“Mauro”,“Lainez Cano”,“”,“lainez28@gmail.com”,“mauro3312LC”);
    
INSERT INTO Users VALUES (“Det Holmes”,“Gwen”,“Palmer Holmes”,“”,“Holmes007@gmail.com”,“enolaHolmes33”);

  
    
INSERT INTO Admins VALUES ("DevGragy","Jhonatan Elias","García Ortega","Administrator","DevGragy@gmail.com","DevGragyT25");
    
INSERT INTO Admins VALUES ("dani2898","Daniela","Villa Bárcenas","Administrator","dani2898@gmail.com","dani2898T25");
    
INSERT INTO Admins VALUES ("ChristianCan", "Christian Alejandro","Can Pérez","Administrator","ChristianCan@gmail.com","ChristianCanT25");
    
INSERT INTO Admins VALUES ("JACM7","José Armando","Cano Meza","Administrator","JACM7@gmail.com","JACM7T25");
    
    
   
INSERT INTO Movies VALUES ("001","004","The Hobbit","2012","25","Eng","Peter Jackson","Fantasy movie");
           
INSERT INTO Movies VALUES ("002","003","Huye","2017","34","Eng","Jordan Peele","High suspense movie");
    
INSERT INTO Movies VALUES ("003","002","Minions","2015","20","Eng","Kyle Balda","Child's movie");
    
INSERT INTO Movies VALUES ("004","001","The Mask","1994","101","Eng","Chuck Russell","Comedy film");
    
    
    
INSERT INTO Category VALUES ("001","Comedy","Movies to laugh");
    
INSERT INTO Category VALUES ("002","Children","Movies for kids");
    
INSERT INTO Category VALUES ("003","Suspense","Movies to bite your nails");
    
INSERT INTO Category VALUES ("004","Fantasy","Movies from a new world");
    
    
 
INSERT INTO Review VALUES ("333","001","Chris74","29/08/20","25");
            
INSERT INTO Review VALUES ("444","002","Chofis99","28/01/21","34");
            
INSERT INTO Review VALUES ("555","003","CrackMLC","20");
            
INSERT INTO Review VALUES ("777","004","Det Holmes","03/04/20","101");
            
            
            
INSERT INTO Favorite VALUES ("020","001","CrackMLC");
    
INSERT INTO Favorite VALUES ("021","002","Chris74");
            
INSERT INTO Favorite VALUES ("022","003","Det Holmes");
            
INSERT INTO Favorite VALUES ("023","004","Chofis99");
