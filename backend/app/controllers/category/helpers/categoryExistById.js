const Category = require('../../../models/category')
const { buildErrObject } = require('../../../middleware/utils')

/**
 * Checks Category model if category with an specific name exists
 * @param {string} name - Category name
 */
const categoryExistById = (id = '') => {
  return new Promise((resolve, reject) => {
    Category.findOne(
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

module.exports = { categoryExistById }
