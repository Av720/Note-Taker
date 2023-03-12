// Dependencies
const path = require("path");

// Routing
module.exports = function (app) {

    // create a GET request for the user to see the html file 
    app.get('/notes', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });
}
