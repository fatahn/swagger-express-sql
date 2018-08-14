'use strict'

const SwaggerExpress = require('swagger-express-mw')
const app = require('express')()
// const bodyParser = require('body-parser')
// const validator = require('express-validator')

module.exports = app // for testing

const config = {
  appRoot: __dirname // required config
}

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err }

  // Defining a route automatically adds app.router to the middleware chain,
  // which may put it ahead of the user defined middleware.
  // https://stackoverflow.com/questions/11038830/how-to-intercept-node-js-express-request

  // middleware
  // app.use(bodyParser.urlencoded({ extended: false }));
  // app.use(validator())
  // swager handles our route definations
  swaggerExpress.register(app)

  const port = process.env.PORT || 10010
  app.listen(port)
})
