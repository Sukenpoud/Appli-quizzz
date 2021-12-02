const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');

const port = process.argv.slice(2)[0];
const app = express();

app.use(bodyParser.json());

const gameService = 'http://localhost:8081';
const scoreService = 'http://localhost:8082';
const userService = 'http://localhost:8083';


// Appeler et afficher les quiz du micro-service GAME
app.get('/gateway/game', (req, res) => {
  axios.get(`${gameService}/game`)
    .then(function (res) {
      console.log('API Game appelée')
      console.log(res.data);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      res.status(201).send('Affichage des quiz');
    }); 
});

// Afficher tous les scores du micro-service SCORE
app.get('/gateway/score', (req, res) => {
  axios.get(`${scoreService}/score`)
    .then(function (res) {
      console.log('API score appelée')
      console.log(res.data);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      res.status(201).send('Affichage des scores');
    }); 
});

// Appeler et afficher les catégories du micro-service GAME
app.get('/gateway/game/categories', (req, res) => {
  axios.get(`${gameService}/game/categories`)
    .then(function (res) {
      console.log('API Game appelée')
      console.log(res.data);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      res.status(201).send('Affichage des catégories');
    }); 
});

// Appeler et afficher les questions d'une catégorie du micro-service GAME
app.get('/gateway/game/questions', (req, res) => {
  axios.get(`${gameService}/game/questions`)
    .then(function (res) {
      console.log('API Game appelée')
      console.log(res.data);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      res.status(201).send('Affichage des questions d\'une catégorie');
    }); 
});

// Ajouter un utilisateur -> n'est relié à rien
app.post('/gateway/register', (req, res) => {
    axios.post(`${userService}/api/auth/signup`, {
        email: 'test@mail.com',
        password: 'mdp'
    })
    .then((res) => {
        console.log(res);
    }, (error) => {
        console.log(error);
    });
});

// Connexion d'un utilisateur -> n'est relié à rien
app.post('/gateway/login', (req, res) => {
  axios.post(`${userService}/api/auth/login`, {
      email: 'test@mail.com',
      password: 'mdp'
  })
  .then((res) => {
      console.log(res);
  }, (error) => {
      console.log(error);
  });
});
console.log(`API GATEWAY listening on port ${port}`);
app.listen(port);