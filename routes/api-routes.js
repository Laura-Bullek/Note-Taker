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


// Completed with help from my tutor, Kristy V. from https://www.wyzant.com/