const { validateResult } = require('../../../middleware/utils')
const { check } = require('express-validator')

/**
 * Validates register request
 */
const validateAddCategory = [
  check('name')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),

  (req, res, next) => {
    validateResult(req, res, next)
  }
]

module.exports = { validateAddCategory }
