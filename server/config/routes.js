console.log("inside of server/config/routes.js")

const Note = require("../controllers/notes.js");
const path = require('path');

module.exports = function(app) {
    app.get('/notes', function(req, res) {
        Note.getNotes(req, res);
    });
    // app.get('/notes/:id', function(req, res) {
    //     Note.getNote(req, res);
    // });
    app.post('/notes', function(req, res) {
        Note.createNote(req, res);
    });
    // app.put('/notes/:id', function(req, res) {
    //     Note.updateNote(req, res);
    // });
    app.delete('/notes/:id', function(req, res) {
        Note.deleteNote(req, res);
    });
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("../widgets/public/dist/public/index.html"))
    });
}