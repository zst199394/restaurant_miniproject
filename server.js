const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

let tables = [];
let waitlist = [];


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get('/tables', function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get('/reserve', function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get('/api/tables', function(req, res) {
    res.json(tables);
});

app.get('/api/waitlist', function(req, res) {
    res.json(waitlist);
});

app.post('/api/tables', function(req, res) {
    if (tables.length < 5) {
        tables.push(req.body);
        res.send(true);
    } else {
        waitlist.push(req.body)
        res.send(false);
    }
})

app.listen(PORT, function() {
    console.log(`Listening on Port ${PORT}`);
});