# Ejercicio: Aplicación "Book Show"

Crearemos una aplicación bajo el esquema MERN (MongoDB + Express + React + Node).

Primero, se realizará el Backend. Posteriormente, el Frontend.


![MERN](https://i.imgur.com/6X55Qbo.png)

## Requerimientos
- NodeJS
- MongoDB
- MongoDB Compass
- Postman

# [BACKEND] Libros

## Iteración 1: Crear la base de datos y propagar un mínimo de datos

- Deberás crear 6 libros. Lo harás directamente desde tu terminal y conectándote a la base de datos 
de MongoDB. Recuerda levantar el servicio mongod.

· **Libro**
``` 
    - ID Libro: (Number)
    - Titulo: (String)
    - Páginas (Number)
    - Descripcion: (String)
```


## Iteración 2: Preparar la aplicación

- Inicializa un proyecto en NodeJS e instala las siguientes dependencias.

```
$ npm init -y
$ npm install express mongoose nodemon
```

- Levanta express y mongoose. Realiza toda la configuración inicial.


## Iteración 3: Crear los modelos

- Crea una carpeta llamada "models" 
- Crea un archivo por cada colección. Por ejemplo: "libro.js".
- En cada archivo, crea un "schema", incluyendo las propiedades de cada colección. 
- Finalmente, harás un "export" al modelo, que permite la accessibilidad del mismo.

## Iteración 4: Crear las rutas para manejar las solicitudes

- Importa los modelos a tu index.js
- Crea las diferentes rutas para cada colección. Por ejemplo, para "estudiantes":

|   Route   | HTTP Verb |   Description   |
|-----------|-----------|-----------------|
| `/libros` |    GET    | Entrega todos los libros |
| `/libros/nuevo` |    POST    | Agrega un libro |
| `/libros/:id` |    GET    | Entrega datos de ese libro |
| `/libros/:id/editar` |    POST    | Actualiza un libro |
| `/libros/:id/borrar` |    POST    | Borra un libro |


Utiliza Postman para probar cada ruta y revisa en MongoDB Compass ó en "Mongo Shell" que los datos se estén manipulando.


# [BACKEND] Autores

## Iteración 5: Crear la base de datos y propagar un mínimo de datos

- Deberás crear 4 autores, conteniendo estas propiedades.

· **Libro**
```
    - ID Autor: (Number)
    - Nombre: (String)
```


## Iteración 6: Crear los modelos

- Crea el modelo "autor.js".
- Crea un "schema", incluyendo las propiedades descritas anteriormente.
- Haz un "export" al modelo, que permite la accessibilidad del mismo.

## Iteración 7: Crear las rutas para manejar las solicitudes

- Importa los modelos a tu index.js
- Crea las diferentes rutas para cada colección:

|   Route   | HTTP Verb |   Description   |
|-----------|-----------|-----------------|
| `/autores` |    GET    | Entrega todos los autores |
| `/autores/nuevo` |    POST    | Agrega un autor |
| `/autores/:id` |    GET    | Entrega datos de ese autor |
| `/autores/:id/editar` |    POST    | Actualiza un autor |
| `/autores/:id/borrar` |    POST    | Borra un autor |

