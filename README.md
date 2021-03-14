# StarMovies - API

Star Movies es una API que maneja datos de películas.

Realiza consultas/peticiones en nuestra API haciendo click aqui [StarMovies API](https://starmovies-api.herokuapp.com/v1).

## Swagger

Checa nuestra documentacion en [Swagger](https://app.swaggerhub.com/apis-docs/ChristianCan/starmoviesapi/0.1#/) para conocer como se realizan peticiones a nuestra API.

## Especificaciones

La API es capaz de:

-   Llevar un registro de películas, favoritos, reviews, categorías y usuarios.
-   Realizar consultas de CRUD para los registros.
-   Poseer seguridad de consultas con usuarios o administrador.

## Usuarios

Usuarios con los que cuenta el sistema:

-   Administrador
-   Usuario

## Historias de Usuario

### Usuario

-   Como usuario de starmovies quiero poder ver y actualizar mis datos para administrar mi informacion dentro de la app.
-   Como usuario de starmovies quiero poder ver la informacion de todas las peliculas para conocerlas a fondo.
-   Como usuario de starmovies quiero poder ver la informacion de todas las categorias para elegir una categoria de mi agrado.
-   Como usuario de starmovies quiero poder crear reviews para dar mi opinion de una pelicula.
-   Como usuario de starmovies quiero poder ver mis reviews para analizar lo que dije acerca de las peliculas.
-   Como usuario de starmovies quiero poder actualizar mis reviews para cambiar de opinion.
-   Como usuario de starmovies quiero poder borrar mis reviews para quitar una review mia.
-   Como usuario de starmovies quiero poder agregar un favorito para almacenar mis peliculas favoritas.
-   Como usuario de starmovies quiero poder ver mis favoritos para conocer cuales almacene.
-   Como usuario de starmovies quiero poder actualizar mis favoritos por si me equivoque de informacion.
-   Como usuario de starmovies quiero poder borrar mis favoritos para quitar los que ya no quiero ver.

### Administrador

-   Como adminstrador de starmovies quiero crear nuevos usuarios para administrar el acceso a la app.
-   Como adminstrador de starmovies quiero ver la informacion de mis usuarios para administrarlos.
-   Como adminstrador de starmovies quiero actualizar la informacion de los usuarios para cambiar valores que ellos no llenen correctamente.
-   Como adminstrador de starmovies quiero eliminar usuarios para tener registros arraigados.
-   Como adminstrador de starmovies quiero crear, actualizar y eliminar peliculas para controlar la informacion de las peliculas almacenadas.
-   Como adminstrador de starmovies quiero crear, actualizar y eliminar categorias para que mis usuarios tengan mayor oportunidad de escoger categorias.
-   Como adminstrador de starmovies quiero actualizar o eliminar reviews para controlar la informacion que no sea prudente acerca de las peliculas.
-   Como adminstrador de starmovies quiero actualizar o eliminar favoritos para controlar la informacion de las peliculas favoritas.

## Modelos

Los modelos poseen varios atributos para identificar los diferentes valores que se pueden consultar mediante las peticiones. Estos modelos están hechos en SQL, por lo tanto poseen llaves primarias (PK) y llaves foráneas (FK) para identificar valores específicos.

### Users

-   userName (PK)
-   firstName
-   LastName
-   role
-   email
-   userPassword

### Admins

-   adminName (PK)
-   firstName
-   LastName
-   role
-   email
-   adminPassword

### Movies

-   idMovie (PK)
-   idCategory (FK)
-   title
-   years
-   rating
-   languages
-   director
-   descriptions

### Category

-   idCategory (PK)
-   category
-   descriptions

### Review

-   idReview (PK)
-   idMovie (FK)
-   userName (FK)
-   review
-   rating

### Favorite

-   idFavorite (PK)
-   idMovie (FK)
-   userName (FK)

## Controladores

Podemos realizar peticiones dentro de la API pero, estas están limitadas, algunas pueden ejecutarse con la sesión de usuarios, otras solo como administrador o incluso algunas peticiones puede realizarlas cualquier tipo de usuario.

Existen controladores para los modelos antes mencionados, es por esto que aqui mostramos algunas de las peticiones que se pueden realizar.

### Users

#### User

El usuario puede leer sus propios datos. `GET`

El usuario puede actualizar sus propios datos (excepto el userName). [Para actualizar es necesario mandar junto a los datos del usuario, un parámetro en el body llamado "oldPassword" con la contraseña anterior del usuario]. `POST`

#### Admin

El administador puede crear nuevos usuarios. `POST`

El administrador puede mostrar la información de todos los usuarios (por limite [?limit=numero], por atributo[?nombredelatributo=valor], por varios atributos (?attribute=atributo1, atributo2, etc). `GET`

El administrador puede actualizar la información de cualquier usuario (excepto el userName). `PUT`

El administrador puede borrar cualquier usuario. `DELETE`

El administrador puede obtener la información del usuario por id. `GET`

### Movies

#### Cualquiera

Cualquiera puede mostrar la información de todas las películas (por limite [?limit=numero], por atributo[?nombredelatributo=valor], por varios atributos (?attribute=atributo1, atributo2, etc). `GET`

Cualquiera puede obtener la información de las películas por id. `GET`

#### User

Nada en especifico.

#### Admin

El administrador puede crear nuevas películas. `POST`

El administrador puede actualizar la información de las películas (excepto el idMovie). `PUT`

El administrador puede borrar películas. `DELETE`

### Categories

#### Cualquiera

Cualquiera puede mostrar la información de todas las categorías (por limite [?limit=numero], por atributo[?nombredelatributo=valor], por varios atributos (?attribute=atributo1, atributo2, etc). `GET`

Cualquiera puede obtener la información de las categorías por id. `GET`

#### User

Nada en específico.

#### Admin

El administrador puede crear nuevas categorías. `POST`

El administrador puede actualizar la información de cualquier categoría (excepto el idCategory). `PUT`

El administrador puede borrar cualquier categoría. `DELETE`

### Reviews

#### Cualquiera

Cualquiera puede leer todos los reviews (por limite [?limit=numero], por varios atributos (?attribute=atributo1, atributo2, etc.) `GET`

Cualquier puede leer un review por id. `GET`

#### User

El usuario puede crear un review. `POST`

El usuario puede mostrar solo sus propios reviews (por limite [?limit=numero], por varios atributos (?attribute=atributo1, atributo2, etc). `GET`

El usuario puede actualizar su propio review. `PUT`

El usuario puede borrar sus propios reviews. `DELETE`

#### Admin

El administrador puede actualizar cualquier review. `PUT`

El administrador puede borrar cualquier review. `DELETE`

### Favorites

#### Cualquiera

Cualquiera puede leer todos los favoritos(por limite [?limit=numero], por varios atributos (?attribute=atributo1, atributo2, etc). `GET`

Cualquier puede leer un favorito por id. `GET`

#### User

El usuario puede crear un favorito. `POST`

El usuario puede leer sus propios favoritos (por limite [?limit=numero], por varios atributos (?attribute=atributo1, atributo2, etc.) `GET`

El usuario puede actualizar sus propios favoritos. `PUT`

El usuario puede borrar sus propios favoritos. `DELETE`

#### Admin

El administrador puede actualizar cualquier favorito. `PUT`

El administrador puede borrar cualquier favorito. `DELETE`

## Autores

-   Can Pérez Christian Alejandro
-   Cano Meza José Armando
-   García Ortega Jhonatan Elias
-   Villa Bárcenas Daniela

## Agradecimientos

Agradecemos a BEDU por darnos la oportunidad de compartir los conocimientos adquiridos en la practica de un sistema backend, muchas gracias por todo el apoyo.
