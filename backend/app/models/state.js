const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const StateSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    stateId: {
      type: String,
      required: true
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)
StateSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('State', StateSchema)
