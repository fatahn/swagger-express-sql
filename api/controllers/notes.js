'use strict';

const db = require('../models').db
const NoteModel = require('../models').Note

module.exports = {
  getNotes: getNotes,
  saveNote: saveNote,
};

/*
  Functions in a127 controllers used for operations should take two parameters:

  Param 1: a handle to the request object
  Param 2: a handle to the response object
 */
function hello(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  var name = req.swagger.params.name.value || 'stranger';
  var hello = util.format('Hello, %s!', name);

  // this sends back a JSON response which is a single string
  res.json(hello);
}

function saveNote(req, res) {
  NoteModel.create({text: req.body})
    res.json(`saved new entry: ${req.body}`)
}

function getNotes(req, res) {
  NoteModel.findAll().then(notes => {
      res.json(notes)
    })
}
