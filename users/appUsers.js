const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');

const port = process.argv.slice(2)[0];
const app = express();

app.use(bodyParser.json());

const scoreService = 'http://localhost:8082';


const userRoutes = require('./routes/user');

app.use('/api/auth', userRoutes);

console.log(`Micro-service users listening on port ${port}`);
app.listen(port);