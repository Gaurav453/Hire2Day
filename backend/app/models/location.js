const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const LocationSchema = new mongoose.Schema(
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
    locationId: {
      type: String,
      required: true
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)
LocationSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('Location', LocationSchema)
