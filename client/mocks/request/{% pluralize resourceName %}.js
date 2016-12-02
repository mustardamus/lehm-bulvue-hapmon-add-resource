module.exports = [
  {
    url: 'GET /{% pluralize resourceName %}',
    cb (req) {
      return {
        items: [
          { _id: 1, name: '{% capitalize resourceName %} 1', slug: '{% resourceName %}-1' },
          { _id: 2, name: '{% capitalize resourceName %} 2', slug: '{% resourceName %}-2' },
          { _id: 3, name: '{% capitalize resourceName %} 3', slug: '{% resourceName %}-3' }
        ]
      }
    }
  },
  {
    url: 'GET /{% pluralize resourceName %}/:slug',
    cb (req) {
      return {
        _id: 1,
        name: '{% capitalize resourceName %}',
        slug: req.params.slug
      }
    }
  },
  {
    url: 'POST /{% pluralize resourceName %}',
    cb (req) {
      if (req.headers.authorization) {
        return {
          _id: 4,
          name: req.body.name,
          slug: req.body.slug
        }
      } else {
        return { status: 401 }
      }
    }
  },
  {
    url: 'PUT /{% pluralize resourceName %}/:id',
    cb (req) {
      if (req.headers.authorization) {
        return {
          _id: req.params.id,
          name: req.body.name,
          slug: req.body.slug
        }
      } else {
        return { status: 401 }
      }
    }
  },
  {
    url: 'DELETE /{% pluralize resourceName %}/:id',
    cb (req) {
      if (req.headers.authorization) {
        return { success: true }
      } else {
        return { status: 401 }
      }
    }
  }
]
