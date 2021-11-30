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

const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');

app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);

console.log(`Micro-service users listening on port ${port}`);
app.listen(port);