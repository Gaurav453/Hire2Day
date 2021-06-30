const Category = require('../../../models/category')
const { buildErrObject } = require('../../../middleware/utils')

/**
 * Registers a new user in database
 * @param {Object} req - request object
 */
const addCategory = (req = {}) => {
  return new Promise((resolve, reject) => {
    console.log(req)
    const category = new Category({
      name: req.name
    })
    category.save((err, item) => {
      if (err) {
        reject(buildErrObject(422, err.message))
      }
      resolve(item)
    })
  })
}

module.exports = { addCategory }
