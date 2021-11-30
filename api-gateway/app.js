const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// const request = require('request');
const axios = require('axios');

const port = process.argv.slice(2)[0];
const app = express();

app.use(bodyParser.json());

const heroesService = 'http://localhost:8081';
const threatsService = 'http://localhost:8082';

// Appeler et afficher les données du micro-service THREATS
app.get('/api/threats', (req, res) => {
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

// Appeler et afficher les données du micro-service HEROES
app.get('/api/heroes', (req, res) => {
    axios.get(`${heroesService}/heroes`)
      .then(function (res) {
        console.log(res.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      }); 
    console.log('API heroes appelée')
});

// Appeler et afficher les données du micro-service HEROES
app.get('/api/heroes', (req, res) => {
    axios.get(`${heroesService}/heroes`)
      .then(function (res) {
        console.log(res.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      }); 
    console.log('API heroes appelée')
});

// Ajouter un utilisateur -> n'est relié à rien mais c'est juste pour te montrer la forme pour envoyer des données
app.post('/api/register', (req, res) => {
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