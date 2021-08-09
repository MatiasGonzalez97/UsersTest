var app= require('./app');
const mysql = require("mysql");
require('dotenv').config();
config = require('./config.json');

if(process.env.ENVIRO == 'desarrollo'){
    port = config.enviroment.desarrollo.port
} else {
    port = 8001 /* Aquí si tuvieramos en el archivo config el entorno de desarrollo elegido lo podiramos llamar desde el config,json por ejemplo: config.enviroment.production.port nos devolveria 8001*/
}

/* Creamos la conexion a la base de datos */
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'users'
})
  
connection.connect(function(err) {
if (err) throw err
console.log('Conectado a la base de datos');
})
global.connection = connection
//crear servidor
app.listen(port,()=>{
    console.log(port)
})
