paso 1º:

archivo .env debe contener: PORT = 3000 DB_HOST = localhost DB_USER = postgres DB_PASSWORD = 12345 DB_NAME =likeme

Paso 2º: CREATE DATABASE likeme;

Paso 3º: CREATE TABLE posts (id SERIAL, titulo VARCHAR(25), img VARCHAR(1000), descripcion VARCHAR(255), likes INT);

paso 4º:
// post correcto //
POST http://127.0.0.1:3000/api/likes/add 
Content-Type: application/json

{
"titulo": "Vegeta",
"img": "https://i.pinimg.com/736x/69/57/08/6957089f6bbcb0edf4108aac0febdc3f.jpg",
"descripcion": "Principe de los Sayayin",
"likes": "1"
}

###
//sin Descripcion //
POST http://127.0.0.1:3000/api/likes/add 
Content-Type: application/json

{
"titulo": "Vegeta",
"img": "https://i.pinimg.com/736x/69/57/08/6957089f6bbcb0edf4108aac0febdc3f.jpg",
"descripcion": "",
"likes": "1"
}

###
//sin URL de IMAGEN //
POST http://127.0.0.1:3000/api/likes/add 
Content-Type: application/json
{
"titulo": "Vegeta",
"img": "",
"descripcion": "Principe de los Sayayin",
"likes": "1"
}

###
//sin titulo //
POST http://127.0.0.1:3000/api/likes/add 
Content-Type: application/json

{
"titulo": "",
"img": "https://i.pinimg.com/736x/69/57/08/6957089f6bbcb0edf4108aac0febdc3f.jpg",
"descripcion": "Principe de los Sayayin",
"likes": "1"
}

###
// Ver Lista //
GET http://127.0.0.1:3000/api/likes/get-all 
Content-Type: application/json

{
}
