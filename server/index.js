/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const controllers = require('./controllers');
require('./db');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

// add routes
app.post('/addjoke', controllers.postJoke);
app.get('/getJoke', controllers.getJoke);

const PORT = 3000;

app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);
