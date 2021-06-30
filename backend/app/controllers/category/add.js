const { matchedData } = require('express-validator')

const { categoryExist, addCategory } = require('./helpers')

const { handleError } = require('../../middleware/utils')

/**
 * Add Category function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const add = async (req, res) => {
  try {
    // Gets locale from header 'Accept-Language'
    req = matchedData(req)
    const doesCategoryExists = await categoryExist(req.name)
    if (!doesCategoryExists) {
      const item = await addCategory(req)
      res.status(201).json(item)
    }
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { add }
