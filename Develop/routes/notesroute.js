// create the dependecies for express
const express = require("express"); // import express
const path = require("path"); //import node package path
const app = express(); //init express instance
const data = require('../db/db.json')
const fs = require('fs')


//GET route for /notes.html
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/notes.html'))
);

//GET route for /api/notes
app.get('/api/notes', (req, res) => {
    res.json(data);
});

//POST route for /api/notes
app.post('/api/notes', (req, res) => {




})

