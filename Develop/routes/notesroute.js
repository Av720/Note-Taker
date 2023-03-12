const fs = require("fs");
const express = require("express");
const data = require("../db/db.json");
const { v4: uuidv4 } = require('uuid'); // this will create a unique id for each note

// exporting the modules function
module.exports = function (app) {
  //create a GET request for "http:localhost:3001/api/notes"
  app.get("/api/notes", (req, res) => {
    //use the data from db.json
    let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

    // send the data to the GET request
    res.json(data);
  });

  // create a POST request for "http:localhost:3001/api/notes"
  // This POST request will create a note on the side pannel and will be store in the db.json file

  app.post("/api/notes", (req, res) => {
    //create a variable for the user notes

    const userNote = req.body;

    userNote.id = uuidv4();

    let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

    // push the new notes from the user into the db.json file
    data.push(userNote);

    fs.writeFileSync("./db/db.json", JSON.stringify(data));

    console.log("\nSuccess! Note added to the db.json file!");

    // This will send the reponse
    res.json(data);
  });

  // BONUS: CREATE a DELETE request in order to delete the note using "delete"

    
  app.delete("/api/notes/:id", (req, res) => {

      //create a variable to read the data from the 'db.json file
    let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

    let noteId = req.params.id.toString();

    // filter the notes and the new array selected will be erased(will only delete the current note deleted by the user)
    data = data.filter((selected) => {
      return selected.id != noteId;
    });

    //this will update the current stored notes file(db.json) 
    fs.writeFileSync("./db/db.json", JSON.stringify(data));

    //this will send the response 
    res.json(data);
  });
};
