# Ejercicio: Aplicación "Library"

Crearemos una aplicación bajo el esquema MERN (MongoDB + Express + React + Node).

Primero, se realizará el Backend. Posteriormente, el Frontend.


![Markdown](https://i.imgur.com/Zzrorh7.jpg)

## Requerimientos
- NodeJS
- MongoDB
- MongoDB Compass
- Postman

# [BACKEND] Libros

## Iteración 1: Crear la base de datos y propagar un mínimo de datos

- Deberás crear 8 libros. Lo harás directamente desde tu terminal y conectándote a la base de datos de MongoDB. Recuerda levantar el servicio mongod.

· **Libro**
``` 
    - ID Libro: (String)
    - Titulo: (String)
    - Páginas (Number)
    - Descripcion: (String)
    - Autor (Object Id)
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
- Crea un archivo "libro.js".
- Crea un "schema", incluyendo las propiedades de cada colección. 
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
    - ID Autor: (String)
    - Nombre: (String)
```


## Iteración 6: Crear los modelos

- Crea el modelo "autor.js".
- Crea un "schema", incluyendo las propiedades descritas anteriormente.
- Haz un "export" al modelo, que permite la accessibilidad del mismo.

## Iteración 7: Crear las rutas para manejar las solicitudes de los autores

- Importa los modelos a tu index.js
- Crea las diferentes rutas para cada colección:

|   Route   | HTTP Verb |   Description   |
|-----------|-----------|-----------------|
| `/autores` |    GET    | Entrega todos los autores |
| `/autores/nuevo` |    POST    | Agrega un autor |
| `/autores/:id` |    GET    | Entrega datos de ese autor |
| `/autores/:id/editar` |    POST    | Actualiza un autor |
| `/autores/:id/borrar` |    POST    | Borra un autor |

# [BACKEND] Usuarios

## Iteración 8: Crear la funcionalidad de usuarios

-  Crea los usuarios (el modelo bajo el nombre de `usuario.js`) con las siguientes propiedades:

· **Usuario**
```
    - Email: (String)
    - Nombre: (String)
    - Password: (String)
    - Token: (String)
```

- Crea las rutas correspondientes a los usuarios:

|   Route   | HTTP Verb |   Description   |
|-----------|-----------|-----------------|
| `/usuarios` |    GET    | Entrega todos los usuarios |
| `/usuarios/nuevo` |    POST    | Agrega un usuario |
| `/usuarios/:id` |    GET    | Entrega datos de ese usuario |
| `/usuarios/:id/editar` |    POST    | Actualiza un usuario |
| `/usuarios/:id/borrar` |    POST    | Borra un usuario |

- Desarrolla las rutas de autenticación:

|   Route   | HTTP Verb |   Description   |
|-----------|-----------|-----------------|
| `/usuario/login` |    POST    | Crea token en cliente y servidor |
| `/usuarios/logout` |    GET    | Destruye el token en cliente y servidor |
| `/usuarios/auth` |    GET    | Verifica si estás autenticado y si es así, entrega datos del usuario en cuestión |



# [FRONTEND] REACT

## Iteración 9: Crear carpeta /client e instalar React

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

## Iteración 10: Construye los componentes "Header" y "Footer"

- Crea e importa los 2 componentes en App.js
- Renderizalos dentro de App.js


## Iteración 11: Construye el ruteo con "react-router-dom"

- Crea una ruta "/" que renderice el componente "Inicio"
- Crea una ruta "/:libro" que renderice el componente "Libro". Recordar que el ":" se refiere a un parámetro que envía el usuario para identificar qué libro quiere.
- Crea una ruta para el "/perfil" que renderice el componente "Perfil".
- Crea una ruta para el "/login" que obtenga el token del servidor y que renderice un componente "Login".
- Crea una ruta para la creación de "usuarios" que renderice el componente "Registro".

| Ruta      |      Componente     |
|-----------|:-------------------:|
| /         |   Página de inicio  |
| /:libro | Página del libro ID |
| /:perfil | Página del perfil del usuario |
| /:login | Página del login del usuario |
| /:registro | Página para registar un usuario |

## Iteración 12: Conéctate al API de tu Backend de libros y renderiza los datos en la página de "Inicio" y en "Libro".

- Utilizar "ComponentDidMount" para capturar los datos dentro del componente de React
- Puedes utilizar "Axios" para realizar el "fetch" o la descarga
- Renderiza los datos de todos los libros en "Inicio"
- Renderiza el dato específico del libro que pedimos vía URL, en "Libro".