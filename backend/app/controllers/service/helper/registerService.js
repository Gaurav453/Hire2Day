const Service = require('../../../models/service')
const { buildErrObject } = require('../../../middleware/utils')

/**
 * Registers a new user in database
 * @param {Object} req - request object
 */
const registerService = (req = {}) => {
  return new Promise((resolve, reject) => {
    const service = new Service({
      name: req.name,
      categoryId: req.categoryId,
      providerId: req.providerId,
      state: req.state,
      city: req.city,
      price: req.price,
      location: req.location
    })
    service.save((err, item) => {
      if (err) {
        reject(buildErrObject(422, err.message))
      }
      resolve(item)
    })
  })
}

module.exports = { registerService }
