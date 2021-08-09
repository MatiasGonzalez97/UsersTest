Hola! bienvenidos a la documentación! Pasaré a detallar los pasos a seguir.
1° Deben clonar el repositorio.
2° Correr en la terminal npm i, para instalar los paquetes. 
3° Crear la base de datos junto con su tabla,(Lo pueden hacer desde el archivo: *initial.sql* que se encuentra aquí mismo)
4° Utilizando el comando en la terminal "npm start" se levantará el proyecto, por default dado lo declarado en el archivo .env correrá en el puerto 8000.
5° Eso es todo! Ya se puede empezar a probar.

Metodos existenes en el archivo 'controllers/users.js'

*create* : Este metodo recibe un json con información para ser almacenada en la base de datos.
    Es un metodo de tipo *POST*
    request de ejemplo: 
        {
            "name":"Matias",
            "last_name":"Gonzalez",
            "legajo":"40824596",
            "email":"matias.gonzalez.nicolas06@gmail.com",
            "birthday":"2021-12-06"
        }


Ejemplo de respuesta correcta: HTTP Status response code 200
        {
            "message": {
                "status": "success",
                "data": {
                    "Id": 6,
                    "name": "Matias",
                    "last_name": "Gonzalez",
                    "legajo": "40824596",
                    "email": "matias.gonzalez.nicolas06@gmail.com",
                    "birthday": "2021-12-06"
                }
            }
        }

Ejemplo de error de validacion (por ejemplo mail con formato incorrecto) HTTP status code 422

{
    "message": "validacion incorrecta"
}



*getUserById* : Este metodo recibe un id en la url para traer información sobre el mismo.
        Es un metodo de tipo GET
            URL de ejemplo :  http://localhost:8000/api/getUserById/4
            request de ejemplo : Nada, dado que no recibe parametros,

Respuesta de ejemplo exitosa: Codigo HTTP 200
    {
    "message": {
        "data": {
            "id": 4,
            "name": "Mati",
            "last_name": "Gonzalez",
            "birthday": "2021-05-10T03:00:00.000Z"
            }
        }
    }


De todas formas para poder testearlo si desean también les dejo el JSON de postman con la colección para que puedan importarlo al suyo y lo puedan probar.
https://www.getpostman.com/collections/93669b52682158e35c31