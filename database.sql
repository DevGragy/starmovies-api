DROP DATABASE IF EXISTS starmoviesapi;
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

CREATE TABLE Category(
    idCategory INT PRIMARY KEY,
    category VARCHAR(25) NOT NULL,
    descriptions VARCHAR(50) NOT NULL
);

CREATE TABLE Movies(
    idMovie INT PRIMARY KEY,
    idCategory INT NOT NULL,
    title VARCHAR(30) NOT NULL,
    years INT, 
    rating VARCHAR(5) NOT NULL,
    languages VARCHAR(20),
    director VARCHAR(30) NOT NULL,
    descriptions VARCHAR(50) NOT NULL,
    FOREIGN KEY (idCategory) REFERENCES Category(idCategory)
);

CREATE TABLE Review(
    idReview INT PRIMARY KEY,
    idMovie INT NOT NULL,
    userName VARCHAR(20) NOT NULL,
    review VARCHAR(192) NOT NULL,
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


INSERT INTO Users VALUES ("Chris74","Chris","Mendoza Maldonado","User","chris_mm@gmail.com","Taquitou");
    
INSERT INTO Users VALUES ("Chofis99","Ana Sofia","Ortega Sanchez","User","lachifis@gmail.com","cerezitaSanchez99");
    
INSERT INTO Users VALUES ("CrackMLC","Mauro","Lainez Cano","User","lainez28@gmail.com","mauro3312LC");
    
INSERT INTO Users VALUES ("Det Holmes","Gwen","Palmer Holmes","User","Holmes007@gmail.com","enolaHolmes33");

INSERT INTO Users VALUES ("IrisHeart", "Iris", "Taylor Moore","User","irisheart10@gmail.com","heartoflove22");

INSERT INTO Users VALUES ("SergioDeus97", "Sergio", "Jimenez Gomez","User","serchdeus2000@gmail.com","cheito1997");


  
    
INSERT INTO Admins VALUES ("DevGragy","Jhonatan Elias","García Ortega","Administrator","DevGragy@gmail.com","DevGragyT25");
    
INSERT INTO Admins VALUES ("dani2898","Daniela","Villa Bárcenas","Administrator","dani2898@gmail.com","dani2898T25");
    
INSERT INTO Admins VALUES ("ChristianCan", "Christian Alejandro","Can Pérez","Administrator","ChristianCan@gmail.com","ChristianCanT25");
    
INSERT INTO Admins VALUES ("JACM7","José Armando","Cano Meza","Administrator","JACM7@gmail.com","JACM7T25");



INSERT INTO Category VALUES (001,"Comedy","Movies to laugh");
    
INSERT INTO Category VALUES (002,"Children","Movies for kids");
    
INSERT INTO Category VALUES (003,"Suspense","Movies to bite your nails");
    
INSERT INTO Category VALUES (004,"Fantasy","Movies from a new world");

INSERT INTO Category VALUES (005,"Science Fiction","Movies that use fictional science to tell stories");

INSERT INTO Category VALUES (006,"Action","Movies filled with explosions and fight scenes");

INSERT INTO Category VALUES (007,"Crime","Movies following the events of a crime");

INSERT INTO Category VALUES (008,"History","Movies that are based on historical events");

INSERT INTO Category VALUES (009, "Drama", "Movies that will make you feel sad or cry");

INSERT INTO Category VALUES (010, "Horror", "Movies that will scare you");
    
    
   
INSERT INTO Movies VALUES (001,004,"The Hobbit",2012,"B15","Eng","Peter Jackson","Fantasy movie");
           
INSERT INTO Movies VALUES (002,003,"¡Huye!",2017,"C","Eng","Jordan Peele","High suspense movie");
    
INSERT INTO Movies VALUES (003,002,"Minions",2015,"A","Eng","Kyle Balda","Child's movie");
    
INSERT INTO Movies VALUES (004,001,"The Mask",1994,"B","Eng","Chuck Russell","Comedy film");
 
INSERT INTO Movies VALUES (005,007,"The Godfather",1972,"C","Eng","Francis Ford Coppola","Crime and drama film");

INSERT INTO Movies VALUES (006,006,"The Dark Knight",2008,"B","Eng","Christopher Nolan","Action and drama film");

INSERT INTO Movies VALUES (007,008,"Schindler's List",1993,"B15","Eng","Steven Spielberg","Biography, drama and history film");

INSERT INTO Movies VALUES (008,004,"LOTR: The Return of the King",2003,"B","Eng","Peter Jackson","Fantasy and adventure film");

INSERT INTO Movies VALUES (009,009,"Fight Club",1999,"C","Eng","David Fincher","Drama film");

INSERT INTO Movies VALUES (010,005,"Inception",2010,"B","Eng","Christopher Nolan","Action, adventure and sci-fi film");

INSERT INTO Movies VALUES (011,005,"Matrix",1999,"B","Eng","Wachowski Sisters","Action and sci-fi film");

INSERT INTO Movies VALUES (012,001,"La vita è bella",1997,"B","Italian","Roberto Benigni","Comedy, drama and romance film");

INSERT INTO Movies VALUES (013,003,"The Silence of the Lambs",1991,"C","Eng","Jonathan Demme","Crime, drama and thriller film");

INSERT INTO Movies VALUES (014,005,"Star Wars",1977,"AA","Eng","George Lucas","Action, adventure and sci-fi film");

INSERT INTO Movies VALUES (015,002,"Spirited Away",2001,"A","Japanese","Hayao Miyazaki","Animation film");

INSERT INTO Movies VALUES (016,009,"Parasite",2019,"B15","Korean","Bong Joon Ho","Drama and thriller film");

INSERT INTO Movies VALUES (017,003,"The Platform",2019,"C","Spanish","Galder Gaztelu-Urrutia","Suspense and horror film");

INSERT INTO Movies VALUES (018,002,"Coco",2017,"A","Eng","Lee Unkrich & Adrian Molina","Child's movie");

INSERT INTO Movies VALUES (019,002,"Despicable Me",2010,"AA","Eng","Pierre Coffin & Chris Renaud","Child's movie");

INSERT INTO Movies VALUES (020,001,"1917",2019,"B","Eng","Sam Mendes","History, war and drama film");

INSERT INTO Movies VALUES (021,010,"Midsommar",2019,"C","Eng","Ari Aster","Horror, mystery and drama film");

INSERT INTO Movies VALUES (022,010,"A Quiet Place",2018,"B","Eng","Jhon Krasinski","Horror and drama film");

INSERT INTO Movies VALUES (023,006,"Fast & Furious",2009,"B","Eng","Justin Li","Action film");

INSERT INTO Movies VALUES (024,004,"El Laberinto del Fauno",2006,"B15","Spanish","Guillermo del Toro","Fantasy and drama film");

INSERT INTO Movies VALUES (025,010,"Jaws",1975,"B","Eng","Steven Spielberg","Horror and thriller film");


 
INSERT INTO Review VALUES (001,001,"Chris74","A deliberately inflated work of fanfare, with eyes drawn acutely towards the box office.","25");
            
INSERT INTO Review VALUES (002,002,"Chofis99","A typical PC mainstream overhyped film, pretty predictable and boring.","34");
            
INSERT INTO Review VALUES (003,003,"CrackMLC","Following on from the minions being major highlights in both Despicable me movies this was really disappointing.","20");
            
INSERT INTO Review VALUES (004,004,"Det Holmes","The really great thing about the movie is Carrey. Anything that you can imagine him doing, he does here.","100");

INSERT INTO Review VALUES (005,008,"Chofis99","This is one of my favourites, a classic. Full of action and entertainment to keep you interested every time its on.","90");

INSERT INTO Review VALUES (006,021,"Det Holmes","I personally didn't like it. Its main goal in my opinion is to disturb the viewer.","49");

INSERT INTO Review VALUES (007,023,"IrisHeart","This is a movie for the guys. Hot chicks, fast cars, big explosions, big stunts and big tuff men. But it's no movie for serious movie goers.","30");

INSERT INTO Review VALUES (008,014,"SergioDeus97","Looking at it subjectively, it isn't a really good film. A lot of clichés, bad dialogue, cracker jack philosophy, and unimpressive acting.","71");

INSERT INTO Review VALUES (009,012,"Det Holmes","This is a deeply moving and funny portrayal of a clever father's bottomless love for his son, during one the most horrific times in history.","89");

INSERT INTO Review VALUES (010,009,"CrackMLC","A wonderful film. The depth of character structure is close to perfection.","95");
            
INSERT INTO Review VALUES (011,016,"Chris74","I think there's a really good movie buried in Parasite somewhere, but I gave up trying to find it.","68");

INSERT INTO Review VALUES (012,020,"Chris74","Looked forward to watching this but got really disappointed because the story seems to be made up of a million coincidences strung together.","57");

INSERT INTO Review VALUES (013,011,"IrisHeart","There is a reason why The Matrix is a classic. The (then) ground breaking visual effects coupled together with on point acting and a classic story.","80");

INSERT INTO Review VALUES (014,008,"CrackMLC","Wonderful on every level. Love the characters and special effects. A great end to a monumental epic.","100");

INSERT INTO Review VALUES (015,012,"IrisHeart","Drama/Comedy... although in a way contradictory this is the way to describe the movie.","78");

INSERT INTO Review VALUES (016,013,"SergioDeus97","A film that proves you don't need tons of blood and gore to have a good suspense film. One of the greatest suspense films in the history of cinema.","99");

INSERT INTO Review VALUES (017,007,"CrackMLC","This movie show this dark part of human history. The emotional strength is based on real events, not on skills of film makers.","62");

INSERT INTO Review VALUES (018,025,"Chofis99","It's all about the tension present all throughout the movie. first I felt involved, but as the plot progressed, it got boring.","42");

INSERT INTO Review VALUES (019,015,"SergioDeus97","A simple enough story, told with such charm and imagination that it is hard not to love.","88");

INSERT INTO Review VALUES (020,019,"Chris74","the plot is highly predictable, the characterisation belaboured and most of the jokes purile in the extreme. ","37");


            
INSERT INTO Favorite VALUES (001,001,"CrackMLC");
    
INSERT INTO Favorite VALUES (002,002,"Chris74");
            
INSERT INTO Favorite VALUES (003,003,"Det Holmes");
            
INSERT INTO Favorite VALUES (004,004,"Chofis99");

INSERT INTO Favorite VALUES (005,014,"Chofis99");

INSERT INTO Favorite VALUES (006,018,"SergioDeus97");

INSERT INTO Favorite VALUES (007,021,"IrisHeart");

INSERT INTO Favorite VALUES (008,016,"Chris74");

INSERT INTO Favorite VALUES (009,008,"CrackMLC");

INSERT INTO Favorite VALUES (010,004,"Det Holmes");

INSERT INTO Favorite VALUES (011,019,"Chofis99");

INSERT INTO Favorite VALUES (012,006,"IrisHeart");

INSERT INTO Favorite VALUES (013,013,"SergioDeus97");

INSERT INTO Favorite VALUES (014,024,"Chris74");

INSERT INTO Favorite VALUES (015,011,"IrisHeart");
