const express = require('express')
const router = express.Router()

require('../../config/passport')
const passport = require('passport')
const requireAuth = passport.authenticate('jwt', {
  session: false
})
const trimRequest = require('trim-request')

const { roleAuthorization } = require('../controllers/auth')
const {
  validateRegisterService,
  validateGetService,
  validateDeleteService
} = require('../controllers/service/validators')
const { register } = require('../controllers/service/register')
const { get } = require('../controllers/service/get')
const { del } = require('../controllers/service/delete')

/*
 * Service routes
 */

/*
 * Register Service
 */
router.post(
  '/register',
  trimRequest.all,
  validateRegisterService,
  requireAuth,
  roleAuthorization(['provider']),
  register
)

/*
 * Get Services
 */
router.post('/get', trimRequest.all, validateGetService, get)

router.post('/delete', trimRequest.all, validateDeleteService, del)

module.exports = router
