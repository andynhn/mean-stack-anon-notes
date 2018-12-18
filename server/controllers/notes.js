console.log("inside of server/controllers/notes.js");

const mongoose = require("mongoose"),
        Note = mongoose.model("Note");

class Notes {
    getNotes(req, res){
        Note.find({}).sort({"createdAt": -1}).exec( function(err,notes){
            if(err) {
                res.json({"status": "not ok", "errors": err})
            } else {
                res.json({"status": "ok", "notes": notes});
            }
        });
    }
    // getNote(req, res){
    //     Note.findById(req.params.id, function(err, note) {
    //         if(err) {
    //             res.json({"status": "not ok", "errors": err});
    //         } else {
    //             res.json({"status": "ok", "note": note});
    //         }
    //     });
    // }
    createNote(req, res){
        // Note.findOne({name: req.body.name}, function(err, note){
        //     if(note){
        //         // res.json({"status": "repeat note", "message": "This note already exists in the database"});
        //         res.json({"status": "not ok", "errors": {"errors": {"repeat": {"message": "This note already exists in the database"}}}});

        //     } else {
                let note = new Note(req.body);
                note.save(function(err) {
                    if(err) {
                        res.json({"status": "not ok", "errors": err});
                    } else {
                        res.json({"status": "ok"});
                    }
                });
        //     }
        // });
    }

    // updateNote(req, res){
    //     var flag = true;
    //     Note.find({_id: { $nin: req.params.id }}, function(err, notes){
    //         for(let entry of notes){
    //             console.log(entry, entry.name)
    //             if(entry.name == req.body.name.toLowerCase()){
    //                 flag = false;
    //                 res.json({"status": "not ok", "errors": {"errors": {"repeat": {"message": "This Note already exists in the database"}}}});
    //                 break;
    //             } 
    //         }
    //         if (flag == true){
    //             Note.findByIdAndUpdate(req.params.id, req.body, {runValidators: true}, function(err, note) {
    //                 if(err) {
    //                     res.json({"status": "not ok", "errors": err});
    //                 } else {
    //                     res.json({"status": "ok"});
    //                 }
    //             });
    //         }
    //     });
    // }
    deleteNote(req, res){
        Note.findByIdAndDelete(req.params.id, function(err) {
            if(err) {
                res.json({"status": "not ok", "errors": err});
            } else {
                res.json({"status": "ok"});
            }
        });
    }
}
module.exports = new Notes();