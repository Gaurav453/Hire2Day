const express = require('express')
const router = express.Router()

const trimRequest = require('trim-request')
const {
  validateAddCategory,
  validateDeleteCategory
} = require('../controllers/category/validators')

const { add } = require('../controllers/category/add')
const { get } = require('../controllers/category/get')
const { del } = require('../controllers/category/delete.js')

/*
 * Service routes
 */

/*
 * Get category
 */
router.get('/get', trimRequest.all, get)

/*
 * Add Services
 */
router.post('/add', trimRequest.all, validateAddCategory, add)

/*
 * Delete Category
 */
router.post('/delete', trimRequest.all, validateDeleteCategory, del)

module.exports = router
