console.log("inside of server/models/note.js");

const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
    content: { 
        type: String, 
        required: [true, "Note is required"], 
        minlength: [3, "Note must be at least 3 characters"]
    },
}, {timestamps: true})

mongoose.model("Note", NoteSchema);