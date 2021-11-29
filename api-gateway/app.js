const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const request = require('request');

const port = process.argv.slice(2)[0];
const app = express();

app.use(bodyParser.json());

const heroesService = 'http://localhost:8081';
const threatsService = 'http://localhost:8082';

app.get(`${threatsService}/threats`, (req, res) => {
    console.log('Returning threats list');
    res.send(threats);
});

app.post('/mix', (req, res) => {
    request.post({
        headers: {'content-type': 'application/json'},
        url: `${heroesService}/hero/${req.body.heroId}`,
        body: `{
            "img": "erdyt"
        }`
    }, (err, heroResponse, body) => {
        if (!err) {
            // const threatId = parseInt(req.body.threatId);
            // const threat = threats.find(subject => subject.id === threatId);
            threat.assignedHero = req.body.heroId;
            res.status(202).send(threat);
        } else {
            res.status(400).send({problem: `Hero Service responded with issue ${err}`});
        }
    });
  });

console.log(`API GATEWAY listening on port ${port}`);
app.listen(port);