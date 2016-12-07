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

  schema.set('toJSON', {
    transform: (doc, obj, opt) => {
      // delete obj.token -> remove fields you dont want to return to the client
      return obj
    }
  })

  return mongoose.model(name, schema)
}
