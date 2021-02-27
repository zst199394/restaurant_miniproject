const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

let currentRes = [];
let waitingList = [];

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home.html')))

app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')))

app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'reserve.html')))

app.get('/api/tables', (req,res) => res.join(currentRes));

app.get('/api/waitlist', (req, res) => res.join(waitingList));

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));