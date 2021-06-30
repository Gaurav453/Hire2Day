const Service = require('../../../models/service')
const { buildErrObject } = require('../../../middleware/utils')

/**
 * Registers a new user in database
 * @param {Object} req - request object
 */
const getService = (req) => {
  return new Promise((resolve, reject) => {
    const search = {}
    for (const item in req) {
      if (req[item] !== undefined) {
        search[item] = req[item]
      }
    }
    Service.find(search, (err, item) => {
      if (err) {
        reject(buildErrObject(422, err.message))
      }
      resolve(item)
    })
  })
}

module.exports = { getService }
