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

|   Ruta   | HTTP Verbo |  Descripción   |
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

· **Autor**
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


# [FRONTEND] REACT

## Iteración 8: Crear carpeta /client e instalar React

- Inicia creando una carpeta llamada "client" dentro de tu proyecto. Sitúate en la terminal dentro de esta carpeta e
instala React.

```shell
   $ cd client
   $ create-react-app .
```

- Nota que **tienes dos package.json**. Uno dentro de /client y otro en la raiz del proyecto. Uno estará vinculado con la configuración de React y el otro con el servidor.

## Iteración 9: Conecta tu aplicación de React con el servidor a través del package.json

- Haz que tu servidor se conecte en el puerto 3002.
- Abre el "package.json" dentro de tu carpeta /client y coloca:

```javascript
  "proxy":"http://localhost:3002"
```

## Iteración 10: Construye cuatro componentes. "Home" y "Book", envueltos ambos entre "Header" y "Footer"

- Crea cada uno, partiendo de App.

## Iteración 11: Construye el ruteo con "react-router-dom"

|   Ruta   | Componente   |
|----------------------------|
| `/` | Página de inicio |
| `/:idLibro` | Página del libro elegido |
