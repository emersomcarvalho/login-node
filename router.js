const express = require('express');

const SessionController = require ('./src/controller/SessionController')

const routes = express.Router();

routes.get('/sessions', SessionController.get);

routes.post('/sessions', SessionController.store);

routes.post('/users', SessionController.store);

module.exports = routes;