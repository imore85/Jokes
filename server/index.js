const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));

// add routes
// app.get('/test', (req, res) => res.send(201));

const PORT = 3000;
app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);
