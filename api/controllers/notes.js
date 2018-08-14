'use strict'

const db = require('../models').db
const NoteModel = require('../models').Note

module.exports = {
  getNotes: getNotes,
  saveNote: saveNote,
}

function saveNote(req, res) {
  // req.checkBody("text", "Please use an email").isEmail()

  // const errors = req.validationErrors();
  // // if (errors) {
  //   res.send(errors);
  //   return
  // } else {
  //   NoteModel.findAll().then(notes => {
  //     res.json(notes)
  //   })
  // // }
  // NoteModel.create({text: req.body})
  // res.json(`saved new entry: ${'req.body.text'}`)
  res.json(req.body)
  console.log(req.body)
}

function getNotes(req, res) {
  NoteModel.findAll().then(notes => {
      res.json(notes)
    })
}
