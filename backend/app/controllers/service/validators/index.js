const { validateGetService } = require('./validateGetService')
const { validateRegisterService } = require('./validateRegisterService')
const { validateDeleteService } = require('./validateDeleteService')


module.exports = {
  validateDeleteService,
  validateGetService,
  validateRegisterService
}
