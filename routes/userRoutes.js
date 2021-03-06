const express = require('express');
const UserController = require('../controllers/UserControllers'); //Requerimos el controlador.
const api = express.Router();


//POST: insertar datos privados.
//GET: obeter datos.
//PUT: Modificar información.
//DELETE: eliminar información.

//el API Hace referencia al metodo Router.
api.get('/saludos',(req, res)=>{
    console.log("Primera ruta con express");
});

//Exportar para poder usarlos en otro lado.
api.post('/users', UserController.create);
api.put('/users/:id', UserController.update);
api.post('/loginUser', UserController.login);
api.get('/users', UserController.getUsers);


module.exports = api;