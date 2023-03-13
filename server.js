// create the dependecies for express
const express = require("express"); // import express
const path = require("path"); //import node package path
const app = express(); //init express instance
const data = require('./db/db.json')

//specify which port express will run 
const PORT = process.env.PORT || 3001;  

//middleware(allows public folder to be unblocked)
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// create 2 routes (notes and html)
require('./routes/notesroute')(app);
require('./routes/htmlroute')(app);

//console.log the port to preview incoming connections
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
