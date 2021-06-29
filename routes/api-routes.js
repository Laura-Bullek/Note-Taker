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



// Completed with help from my tutor, Kristy V. from https://www.wyzant.com/