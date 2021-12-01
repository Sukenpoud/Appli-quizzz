const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');

const port = process.argv.slice(2)[0];
const app = express();

app.use(bodyParser.json());

const heroesService = 'http://localhost:8081';
const threatsService = 'http://localhost:8082';

const gameService = 'http://localhost:8083';
const scoreService = 'http://localhost:8084';

// Appeler et afficher les données du micro-service THREATS
app.get('/gateway/threats', (req, res) => {
    axios.get(`${threatsService}/threats`)
      .then(function (res) {
        console.log(res.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      }); 
    console.log('API threats appelée')
});

// Appeler et afficher les catégories du micro-service GAME
app.get('/gateway/game/categories', (req, res) => {
  axios.get(`${gameService}/categories`)
    .then(function (res) {
      console.log('API Game appelée -> Affichage des catégories')
      console.log(res.data);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    }); 
});

// Ajouter un utilisateur -> n'est relié à rien mais c'est juste pour te montrer la forme pour envoyer des données
app.post('/gateway/register', (req, res) => {
    axios.post(`${heroesService}/user/add`, {
        email: 'test@mail.com',
        password: 'mdfkoejo'
    })
    .then((res) => {
        console.log(res);
    }, (error) => {
        console.log(error);
    });
});
console.log(`API GATEWAY listening on port ${port}`);
app.listen(port);