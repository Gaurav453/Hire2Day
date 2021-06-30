const Category = require('../../../models/category')
const { buildErrObject } = require('../../../middleware/utils')

/**
 * Registers a new user in database
 * @param {Object} req - request object
 */
const deleteCategory = (req = {}) => {
  return new Promise((resolve, reject) => {
    Category.deleteOne({ _id: req.id }, (err, item) => {
      if (err) {
        reject(buildErrObject(422, err.message))
      }
      resolve(item)
    })
  })
}

module.exports = { deleteCategory }
