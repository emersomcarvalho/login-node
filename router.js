const express = require('express');

const SessionController = require ('./src/controller/SessionController')

const routes = express.Router();

routes.post('/sessions', SessionController.store);

module.exports = routes;