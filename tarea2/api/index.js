const express = require('express');
require("dotenv").config();
const rutas = require('./src/routes');
const port = process.env.PORT || 3001; // el primero seria falsey si es undefined, en ese caso se usa el puerto 3000 y no el default,  


const app = express();
app.use(express.json());

app.use(rutas);

app.listen(port, ()=>{
    if(process.env.NODE_ENV === "dev"){
        console.log('App is running in port ' + port);
    } else{
        console.log('App is running in port ' + port);
    }
})