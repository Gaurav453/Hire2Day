const { matchedData } = require('express-validator')

const { serviceExistById, deleteService } = require('./helper')

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
    const doesServiceExists = await serviceExistById(req.id)
    if (doesServiceExists) {
      const item = await deleteService(req)
      res.status(201).json(item)
    }
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { del }
