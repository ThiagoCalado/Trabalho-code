const express = require('express');
const route = express.Router();

const homeController = require('./controllers/homeController');
const contatoController = require('./controllers/contatoController')

route.get('/',homeController.homePage);
route.get('/contato', contatoController.homePage);

module.exports = route;

route.post('/', homeController.actionPost);