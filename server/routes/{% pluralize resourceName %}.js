/* global Helpers */
'use strict'

module.exports = {
  'GET /{% pluralize resourceName %}': '{% combine "capitalize,pluralize" resourceName %}Controller.index',
  'GET /{% pluralize resourceName %}/{slug}': '{% combine "capitalize,pluralize" resourceName %}Controller.read',

  'POST /{% pluralize resourceName %}': {
    handler: '{% combine "capitalize,pluralize" resourceName %}Controller.create',
    config: {
      // auth: 'cookie',
      // plugins: {
      //  hapiAuthorization: { roles: ['ADMIN'] }
      // },
      validate: {
        payload: {
          name: Helpers.joi.string().required(),
          slug: Helpers.joi.string().required()
        }
      }
    }
  },

  'PUT /{% pluralize resourceName %}/{id}': {
    handler: '{% combine "capitalize,pluralize" resourceName %}Controller.update',
    config: {
      // auth: 'cookie',
      // plugins: {
      //  hapiAuthorization: { roles: ['ADMIN'] }
      // },
      validate: {
        payload: {
          name: Helpers.joi.string().required(),
          slug: Helpers.joi.string().required()
        }
      }
    }
  },

  'DELETE /{% pluralize resourceName %}/{id}': {
    handler: '{% combine "capitalize,pluralize" resourceName %}Controller.delete',
    config: {
      // auth: 'cookie',
      // plugins: {
      //  hapiAuthorization: { roles: ['ADMIN'] }
      // }
    }
  }
}
