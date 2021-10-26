# Proyecto VideoClub API

## Proyecto realizado para Geeks Hubs Academy, en el que se solicita realizar la API de un videoclub con reparto de películas a domicilio.

## Pre-requisitos del proyecto:

* Instalar **Nodejs** en nuestro equipo, descargándolo de su página oficial
https://nodejs.org/

* Clonar el proyecto en nuestro equipo con git bash:
```
$git clone 'url-del-repositorio'
```

* Instalar todas las dependecias con el siguiente comando:
```
npm install
```

## Creación de la base de datos

Tras modificar el archivo /config/config.json con los datos de nuestro servidor mysql (username, password, database y host), ejecutaremos los siguientes comandos:
* **Creación de la base de datos**:
```
sequelize db:create
```
* **Creación de las tablas**:
```
sequelize db:migrate
```
* **Creación de los registros**:
```
sequelize db:seed:all
```

## Uso de la API

Botón para usar la colección de postman, en donde están todos los endpoints para poder manipular la base de datos: [![Ejecutar en Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/11138723-d2394b28-e83f-46c3-91ec-a24a1f2de6d6?action=collection%2Ffork&collection-url=entityId%3D11138723-d2394b28-e83f-46c3-91ec-a24a1f2de6d6%26entityType%3Dcollection%26workspaceId%3Df063660d-fd06-4b33-a75b-f9e5a3dfcbcd)

<br>

¡IMPORTANTE! En esta API existe un sistema de control de acceso por token. Cuando se llamen a los endpoints de Ingredients, Recipes y Contains es necesario un token de acceso. Para obtener el token hay que acceder al endpoint localhost:3000/access/signin e introducir por el body las credenciales de acceso de ese usuario. Con el token que obtenemos de respuesta podremos acceder al resto de endpoints de nuestra API. Para introducir ese token en Postman deberemos de acceder a la pestaña Authorization, y en Type seleccionar Bearer Token.

<br>

Es necesario crear un usuario con el endpoint localhost:3000/access/signup, para que se encripte la contraseña.

## Tecnologías utilizadas en el proyecto:

* **express**: Instalamos express en nuestro proyecto:
```
npm install express
```
* **axios**: Instalamos axios en nuestro proyecto:
```
npm install axios
```
* **nodemon**: Instalamos nodemon en nuestro proyecto. También añadimos en nuestro **package.json** un script para poder ejecutarlo:
```
npm install nodemon
```
```
//AÑADIDO EN PACKAGE.JSON
"dev": "nodemon index.js"
```
```
//EJECUTAMOS EN TERMINAL
npm run dev
```
* **colors**: Instalamos colors en nuestro proyecto, para poder dar formato a los mensajes que aparezcan en consola.
```
npm install colors
```
* **morgan**: Instalamos morgan en nuestro proyecto, para poder mostrar mensajes por terminal al realizar peticiones al servidor.
```
npm install morgan
```
* **winston**: Instalamos winston en nuestro proyecto, creando la posibilidad de generar logs y guardarlos.
```
npm install wiston
```
* **sequelize**: Instalamos sequelize en nuestro proyecto, haciendo que podamos conectarnos y manipular la base de datos.
```
npm install sequelize-cli -g
npm install --save sequelize mysql2 sequelize-cli
sequelize init
```
* **cors**: Instalamos cors en nuestro proyecto, para tener un control de acceso a nuestra API:
```
npm install cors
```
* **jsonwebtoken**: Instalamos jsonwebtoken en nuestro proyecto para gestionar uso de tokens:
```
npm install jsonwebtoken
```
* **bcrypt**: Instalamos bcrypt en nuestro proyecto para encriptar contraseñas:
```
npm install bcrypt
```

## Explicación de la estructura del proyecto

Usamos el modelo vista-controlador para estructurar el proyecto. **Creamos un CRUD básico**. En el proyecto existirá la siguiente estructura:

* **index.js**: Este es el archivo principal. En este archivo se llama al archivo de las rutas, se gestiona la creación de logs, se gestiona la ruta inicial (/) y se arranca el servidor.

* **config**
    * **winston.js**: En este archivo se crea la configuración para que se guarden los logs de la aplicación.
    * **config.json**: En este archivo se gestiona la configuración para conectar con la base de datos. Se crea de manera automática con **sequelize**.
    * **auth.js**: En este archivo se gestiona la clave con la que se cifra la password a encriptar, la duración del token y la cantidad de veces que se encripta la password.

* **middlewares**
    * **auth.js**: En este archivo se gestiona la existencia y uso de los token para acceder a las zonas restringidas de la API.

* **logs**: Dentro de este directorio se crea el archivo de logs.

* **db.js**: En este archivo se gestiona el acceso a la base de datos.

* **router.js**: En este archivo se gestiona las diferentes vistas que puede tener la aplicación. Se creará una ruta por cada tabla de la base de datos a la que queramos acceder (Ingrediente, Recipes, Contains y Users).

* **views**

    * **UsuarioRouter.js**: En este archivo gestionamos la ruta /usuarios y los endpoints que apuntan a dicha ruta.
    * **PeliculaRouter.js**: En este archivo gestionamos la ruta /peliculas y los endpoints que apuntan a dicha ruta.
    * **PedidoRouter.js**: En este archivo gestionamos la ruta /pedidos y los endpoints que apuntan a dicha ruta.

* **controllers**
    * **UsuarioController.js**: En este archivo creamos las funciones de cada endpoint:
        * **getAll**: OBtenemos un listado de todas las películas.
    

* **migrations**
    * **01-create-pelicula.js**: Al introducir el comando sequelize model:generate --name pelicula --attributes titulo:string,genero:string,actores:string,ciudad:string,alquilada:boolean se genera este archivo. Editamos el archivo para indicar que ningún campo pueda ser null.

* **models**
    * **index.js**: Gestiona la conexión con la base de datos.
    * **pelicula.js**: Archivo creado al usar el comando sequelize model:generate... En este archivo está creado el esquema de datos que sigue la tabla peliculas de la base de datos. En este archivo añadimos también que ningún campo puede ser null.

* **seeders**:

    * **01-demo-pelicula**: Se genera plantilla para la creación de registros para la tabla ingredient, tras introducir el comando sequelize seed:generate --name demo-pelicula. Añadimos registros en esta plantilla para poder agregarlos directamente a la base de datos de MySQL.

* **¡IMPORTANTE!** --> Creamos el archivo **.gitignore**, e incluimos lo siguiente (esencial para no subir la carpeta **node_modules** a github cuando hagamos push a nuestros archivos, entre otros):
```
/node_modules
/logs
package-lock.json
```