const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController')

route.get('/',homeController.homePage);
route.get('/contato', contatoController.homePage);

module.exports = route;

route.post('/', homeController.actionPost);