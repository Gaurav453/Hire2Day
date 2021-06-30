const Category = require('../../../models/category')
const { buildErrObject } = require('../../../middleware/utils')

/**
 * Checks Category model if category with an specific name exists
 * @param {string} name - Category name
 */
const categoryExist = (name = '') => {
  return new Promise((resolve, reject) => {
    Category.findOne(
      {
        name
      },
      (err, item) => {
        if (err) {
          return reject(buildErrObject(422, err.message))
        }

        if (item) {
          return reject(buildErrObject(422, 'Category_ALREADY_EXISTS'))
        }
        resolve(false)
      }
    )
  })
}

module.exports = { categoryExist }
