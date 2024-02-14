Este repositorio contiene la tarea 2 de la clase de Tecnologías de Desarrollo en el Servidor.

__Objetivo:__ Implementar un middleware para validación de roles

__Descripción:__

Esta tarea consiste en el desarrollo e implementación de un middleware para la validación de roles de un usuario "logueado". 

Se deberá utilizar el API diseñada en la Tarea 1. 

Los endpoints para realizar el "fetch" deben validar que el usuario esté logueado*

Los endpoints para crear, editar y eliminar, deberán implementar el nuevo middleware para validar el rol del usuario

 

__Autenticación:__

Para determinar que el usuario está logueado o no, se deberá detectar un query param llamado "token" con el valor "12345". La presencia de este parametro equivale a estar logueado. 

Los datos el "usuario logueado" pueden estar hardcodeados en el modelo. El rol del usuario debe estar especificado. 

 

__Validación:__

Para validar la correcta implementación de esta tarea, se deberán realizar consultas a cualquiera de los endpoints con y sin la presencia del token como parámetro de query. 

En caso de no presentar el parámetro o no utilizar el valor correcto especificado anteriormente, deberá devolver con un error 401. 

En caso de sí estar logueado, pero tener en el usuario un rol distinto al (o los) especificados en los endpoints, deberá devolver un error 403. 

Si el token y el rol coinciden, el endpoint deberá responder con los datos como se diseñó en la tarea 1. 
