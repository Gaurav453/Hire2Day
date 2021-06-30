const Service = require('../../../models/service')
const { buildErrObject } = require('../../../middleware/utils')

/**
 * Checks Category model if category with an specific name exists
 * @param {string} name - Category name
 */
const serviceExistById = (id = '') => {
  return new Promise((resolve, reject) => {
    Service.findOne(
      {
        _id: id
      },
      (err, item) => {
        if (err) {
          return reject(buildErrObject(422, err.message))
        }

        if (item) {
          resolve(true)
        } else {
          resolve(false)
        }
      }
    )
  })
}

module.exports = { serviceExistById }
