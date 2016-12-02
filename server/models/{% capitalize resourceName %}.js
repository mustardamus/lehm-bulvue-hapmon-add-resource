'use strict'

module.exports = function (mongoose) {
  const name = '{% capitalize resourceName %}'
  const schema = new mongoose.Schema({
    // relatedModelId: { type: mongoose.Schema.ObjectId },
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true }
  }, {
    timestamps: true
  })

  return mongoose.model(name, schema)
}
