const { Router } = require('express');
const DevControllers = require('./controllers/DevControllers');
const SearchController = require('./controllers/SearchController');

const routes = Router();


routes.post('/devs', DevControllers.store);
routes.get('/devs', DevControllers.index);
routes.get('/search', SearchController.index);

module.exports = routes;