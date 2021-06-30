const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const ServiceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    categoryId: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    providerId: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)
ServiceSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('Service', ServiceSchema)
