const express = require('express');

const Assistido = require('./controllers/controllerAssistindo');
const Recentes = require('./controllers/controllerRecentes');
const Filmes = require('./controllers/controllerFilmes');
const Series = require('./controllers/controllerSeries');
const Videos = require('./controllers/controllerVideos');

const Routes = express.Router();

Routes.get('/recentes', Recentes.listar);
Routes.get('/assistindo', Assistido.listar);
Routes.get('/filmes', Filmes.listar);
Routes.get('/series', Series.listar);
Routes.get('/filmes/:id', Filmes.listarID);
Routes.get('/series/:id', Series.listarID);
Routes.get('/videos/:id', Videos.listaVideoID);

Routes.post('/filmes', Filmes.cad);
Routes.post('/series',Series.cad);
Routes.post('/videos', Videos.cadastroVideo);

module.exports = Routes;