const { getService } = require('./helper')
const { matchedData } = require('express-validator')
const { handleError } = require('../../middleware/utils')

/**
 * Get Category function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const get = async (req, res) => {
  try {
    // Gets locale from header 'Accept-Language'
    req = matchedData(req, { includeOptionals: true })
    const item = await getService(req)
    res.status(201).json(item)
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { get }
