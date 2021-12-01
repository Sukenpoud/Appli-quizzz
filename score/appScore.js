const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');

const port = process.argv.slice(2)[0];
const app = express();

import { JsonDB } from 'node-json-db';
import { Config } from 'node-json-db/dist/lib/JsonDBConfig'

var db = new JsonDB(new Config("db-score", true, false, '/'));

app.use(bodyParser.json());

const gameService = 'http://localhost:8083';


// Afficher les scores de l'utilisateur connecté
// Créer un filtre qui affiche uniquement les scores de l'utilisateur à partir de son ID
app.get('/score', (req, res) => {
  console.log('Affiche la liste des scores');
  res.send(db.getData("/"));
});

app.post('/score/:score', (req, res, next) => {
    console.log(req.params.score);
    res.send(db.push)
    res.status(201).json({
      message: 'Objet créé !'
    });
});


console.log(`Micro-service Score listening on port ${port}`);
app.listen(port);