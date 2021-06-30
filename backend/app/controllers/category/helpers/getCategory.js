const Category = require('../../../models/category')
const { buildErrObject } = require('../../../middleware/utils')

/**
 * Registers a new user in database
 * @param {Object} req - request object
 */
const getCategory = () => {
  return new Promise((resolve, reject) => {
    Category.find({}, (err, item) => {
      if (err) {
        reject(buildErrObject(422, err.message))
      }
      resolve(item)
    })
  })
}

module.exports = { getCategory }
