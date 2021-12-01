const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');

const port = process.argv.slice(2)[0];
const app = express();

import { JsonDB } from 'node-json-db';
import { Config } from 'node-json-db/dist/lib/JsonDBConfig'

var db = new JsonDB(new Config("db-game", true, false, '/'));

app.use(bodyParser.json());
const scoreService = 'http://localhost:8084';
const userService = 'http://localhost:8085';

app.get('/game', (req, res) => {
  console.log('Returning games list');
  res.send(db.getData("/"));
});

app.get('/game/categories/', (req, res) => {
    console.log('Returning games categories list');
    res.send(db.getData("/0/categorie") +" "+ db.getData("/1/categorie") +" "+ db.getData("/2/categorie"));
});

app.get('/game/categories/:id', (req, res) => {
    console.log('Returning games categories list');
    res.send(db.getData("/"+req.params.id+"/questions"));
});

//envoie du score au microservice score
//Calcul du score
//puis post vers la fonction score score
app.post('/game', (req, res) => {
    const userID = 1;
    const score = 2;
    axios.post('/score', {
        userID: userID,
        score: score  
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(req.params);
    res.status(201).json({
      message: 'Post vers Score OK !'
    });
  });

  app.post('/score', (req, res) => {
    console.log(req.params);
    //res.send(db.push)
    res.status(201).json({
      message: 'Score ajouté !'
    });
  });

app.use('/img', express.static(path.join(__dirname,'img')));

console.log(`Threats service listening on port ${port}`);
app.listen(port);