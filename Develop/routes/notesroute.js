const fs = require("fs");
const data = require("../db/db.json");

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

    
    });
};
