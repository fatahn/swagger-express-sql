'use strict'

const db = require('../models').db
const NoteModel = require('../models').Note

module.exports = {
  getNotes: getNotes,
  saveNote: saveNote,
}

function saveNote(req, res) {
  req.checkBody("text", "Please use an email").isEmail()
  NoteModel.create({text: req.body})
    res.json(`saved new entry: ${req.body.text}`)
}

function getNotes(req, res) {
  req.checkBody("leader_email", "Enter a valid email address.").isEmail()
  NoteModel.findAll().then(notes => {
      res.json(notes)
    })
}
