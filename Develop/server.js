// create the dependecies for express
const express = require("express"); // import express
const path = require("path"); //import node package path
const app = express(); //init express instance
const fs = require('fs')
const data = require('./db/db.json')

// const api = require('./routes/htmlRoutes')

//specify which port express will run
const PORT = 3001; 

//middleware(allows public folder to be unblocked)
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("public"));

//HTML Routes
//Home
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', ''))
})

//Notes
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'notes.html'))
})


app.get('/api/notes', (req, res) => {

  res.json(data);
});


//console.log the port to preview incoming connections
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
