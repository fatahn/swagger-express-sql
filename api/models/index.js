const Sequelize = require('sequelize')
const config = require('../config')

const sequelize = new Sequelize('notes', null, null, config)

const Note = sequelize.define('note', { text: Sequelize.STRING })

const Op = Sequelize.Op

module.exports = {
  db: sequelize,
  Note: Note,
  Op: Op,
}
