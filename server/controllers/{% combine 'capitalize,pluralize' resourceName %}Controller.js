/* global Helpers, {% capitalize resourceName %} */
'use strict'

module.exports = {
  index (request, reply) {
    let findObj = {}

    {% capitalize resourceName %}.find(findObj).sort({ createdAt: -1 }).exec((err, {% pluralize resourceName %}) => {
      if (err) {
        return reply(Helpers.boom.badImplementation('Find {% pluralize resourceName %}'))
      }

      reply({% pluralize resourceName %})
    })
  },

  create (request, reply) {
    // make sure to validate payload in route!

    let {% resourceName %} = new {% capitalize resourceName %}(request.payload)

    {% resourceName %}.save((err) => {
      if (err) {
        if (err.code === 11000) {
          reply(Helpers.boom.preconditionFailed('{% capitalize resourceName %} slug already exists'))
        } else {
          reply(Helpers.boom.badImplementation('Creating {% resourceName %}'))
        }
      } else {
        reply({% resourceName %})
      }
    })
  },

  read (request, reply) {
    let findObj = { slug: request.params.slug }

    {% capitalize resourceName %}.findOne(findObj, (err, {% resourceName %}) => {
      if (err) {
        return reply(Helpers.boom.badImplementation('Find {% resourceName %}'))
      }

      if ({% resourceName %}) {
        reply({% resourceName %})
      } else {
        reply(Helpers.boom.preconditionFailed('{% capitalize resourceName %} not found'))
      }
    })
  },

  update (request, reply) {
    // make sure to validate payload in route!

    {% capitalize resourceName %}.findById(request.params.id, (err, {% resourceName %}) => {
      if (err) {
        return reply(Helpers.boom.badImplementation('Find {% resourceName %}'))
      }

      if ({% resourceName %}) {
        for (let fieldName in request.payload) {
          {% resourceName %}[fieldName] = request.payload[fieldName]
        }

        {% resourceName %}.save((err) => {
          if (err) {
            if (err.code === 11000) {
              reply(Helpers.boom.preconditionFailed('{% capitalize resourceName %} slug already exists'))
            } else {
              reply(Helpers.boom.badImplementation('Save {% resourceName %}'))
            }
          } else {
            reply({% resourceName %})
          }
        })
      } else {
        reply(Helpers.boom.preconditionFailed('{% capitalize resourceName %} not found'))
      }
    })
  },

  delete (request, reply) {
    {% capitalize resourceName %}.findByIdAndRemove(request.params.id, (err) => {
      if (err) {
        reply({ error: err })
      } else {
        reply({ success: true })
      }
    })
  }
}
