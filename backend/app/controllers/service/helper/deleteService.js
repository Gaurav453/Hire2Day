const Service = require('../../../models/service')
const { buildErrObject } = require('../../../middleware/utils')

/**
 * Registers a new user in database
 * @param {Object} req - request object
 */
const deleteService = (req = {}) => {
  return new Promise((resolve, reject) => {
    Service.deleteOne({ _id: req.id }, (err, item) => {
      if (err) {
        reject(buildErrObject(422, err.message))
      }
      resolve(item)
    })
  })
}

module.exports = { deleteService }
