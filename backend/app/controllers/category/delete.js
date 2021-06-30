const { matchedData } = require('express-validator')

const { categoryExistById, deleteCategory } = require('./helpers')

const { handleError } = require('../../middleware/utils')

/**
 * Add Category function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const del = async (req, res) => {
  try {
    // Gets locale from header 'Accept-Language'
    req = matchedData(req)
    const doesCategoryExists = await categoryExistById(req.id)
    if (doesCategoryExists) {
      const item = await deleteCategory(req)
      res.status(201).json(item)
    }
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { del }
