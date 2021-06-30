const { categoryExist } = require('./categoryExist')
const { categoryExistById } = require('./categoryExistById')
const { addCategory } = require('./addCategory')
const { getCategory } = require('./getCategory')
const { deleteCategory } = require('./deleteCategory')

module.exports = {
  categoryExist,
  categoryExistById,
  addCategory,
  getCategory,
  deleteCategory
}
