'use strict'

const SwaggerExpress = require('swagger-express-mw')
const app = require('express')()
const bodyParser = require('body-parser')
const validator = require('express-validator')

module.exports = app // for testing

const config = {
  appRoot: __dirname // required config
}

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err }

  // install middleware
  swaggerExpress.register(app)
  // middleware
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(validator())

  const port = process.env.PORT || 10010
  app.listen(port)


  // if (swaggerExpress.runner.swagger.paths['/notes']) {
  //   console.log('try this:\nlocalhost:10010/notes to get all notes')
  // }
})
