const db = require('../models').db
const NoteModel = require('../models').Note
const Op = require('../models').Op
const Joi = require('joi')

const schema = Joi.string()

module.exports = {
  getNotes: getNotes,
  saveNote: saveNote,
}

function saveNote(req, res) {
  Joi.validate(req.body.note, schema, { convert: false }, (error, value) => {
    if(error) throw error
    NoteModel.create({text: value})
      .then(res.json(`saved new entry: ${value}`))
      .catch(error => { res.json('Problem saving to DB') })
  })
}

function getNotes(req, res) {
  NoteModel.findAll({
    where: {
      text: {
        [Op.not]: null // IS NOT NULL
      }
    }
  }).then(notes => {
    res.json(notes)
  })
}
