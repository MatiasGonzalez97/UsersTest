var express = require('express');
var bodyparser = require('body-parser');
//express
var app = express();
//rutas
var user_routes = require('./routes/user');
//midlewars
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
//rutas
app.get('/prueba',(req,res)=>{
    return res.status(200).send({
        message:'se llego a la ruta'
    })
});
//reescribir rutas
app.use('/api',user_routes);
//exportar
module.exports = app;