const { registerService } = require('./registerService')
const { getService } = require('./getService')
const { deleteService } = require('./deleteService')
const { serviceExistById } = require('./serviceExistById')

module.exports = {
  serviceExistById,
  deleteService,
  getService,
  registerService
}
