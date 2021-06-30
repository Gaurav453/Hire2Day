const { matchedData } = require('express-validator')

const { categoryExistById } = require('../category/helpers')
const { findUserById } = require('../auth/helpers/findUserById')

const { registerService } = require('./helper')
const { handleError } = require('../../middleware/utils')

/**
 * Add Category function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const register = async (req, res) => {
  try {
    // Gets locale from header 'Accept-Language'
    req = matchedData(req)
    const doesCategoryExists = await categoryExistById(req.categoryId)
    await findUserById(req.providerId)
    if (doesCategoryExists) {
      const item = await registerService(req)
      res.status(201).json(item)
    }
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { register }
