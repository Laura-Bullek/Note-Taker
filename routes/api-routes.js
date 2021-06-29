const db = require("../db/db.json");
const fs = require("fs");
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Displays the notes
module.exports = function(app) {  
  app.get("/api/notes", function(req, res) {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
      if (err) throw err;
    res.json(JSON.parse(data));})
  });

  // Creates new notes
  app.post("/api/notes", function(req, res) {
    let newNote = {
      id: noteID,
      title: req.body.title,
      text: req.body.text
    };

    fs.readFile("./db/db.json", "utf8", (err, data) => {
      if (err) throw err;
      let allNotes = JSON.parse(data);
      allNotes.push(newNote);

      fs.writeFile("./db/db.json", JSON.stringify(allNotes), err => {
        if (err) throw err;
        res.json(allNotes);
      });
    });
  });

  // Deletes a note
  app.delete("/api/notes/:id", (req, res) => {
    let noteID = req.params.id;
    fs.readFile("./db/db.json", "utf8", (err, data) => {
      if (err) throw err;
      const allNotes = JSON.parse(data);
      const newAllNotes = allNotes.filter(note => note.id != noteID);

      fs.writeFile("./db/db.json", JSON.stringify(newAllNotes, null, 2), err => {
        if (err) throw err;
        res.json(newAllNotes);
        console.log("Note Deleted")
      });
    });
  })
}


// So confused with this - some of the front end is missing and I'm lost. 
// I'm leaving this alone for now and will come back.

// Completed with help from my tutor, Kristy V. from https://www.wyzant.com/