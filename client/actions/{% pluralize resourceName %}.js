{%! resourceName # The name of the resource, lowercase and singular %}

const request = require('../helpers/request')

module.exports = {
  index () {
    this.$state.{% pluralize resourceName %}IsLoading = true

    request('GET', '{% pluralize resourceName %}', (err, res) => {
      if (err) {
        this.$actions.notify.error(err)
      } else {
        this.$state.{% pluralize resourceName %} = res
      }

      this.$state.{% pluralize resourceName %}IsLoading = false
    })
  },

  read (slug) {
    this.$state.{% resourceName %}IsLoading = true

    request('GET', `{% pluralize resourceName %}/${slug}`, (err, res) => {
      if (err) {
        this.$actions.notify.error(err)
      } else {
        this.$state.{% resourceName %} = res
      }

      this.$state.{% resourceName %}IsLoading = false
    })
  },

  create (data) {
    this.$state.{% resourceName %}IsLoading = true

    request('POST', '{% pluralize resourceName %}', data, (err, res) => {
      if (err) {
        this.$actions.notify.error(err)
      } else {
        this.$state.{% resourceName %} = res

        this.$actions.notify.success('Successfully created')
        this.$router.push({ name: '{% pluralize resourceName %}-show', params: { slug: res.slug } })
      }

      this.$state.{% resourceName %}IsLoading = false
    })
  },

  update (id, data) {
    this.$state.{% resourceName %}IsLoading = true

    request('PUT', `{% pluralize resourceName %}/${id}`, data, (err, res) => {
      if (err) {
        this.$actions.notify.error(err)
      } else {
        this.$state.{% resourceName %} = res

        this.$actions.notify.success('Successfully updated')
        this.$router.push({ name: '{% pluralize resourceName %}-show', params: { slug: res.slug } })
      }

      this.$state.{% resourceName %}IsLoading = false
    })
  },

  remove (id) {
    this.$state.{% resourceName %}IsLoading = true

    request('DELETE', `{% pluralize resourceName %}/${id}`, (err, res) => {
      if (err) {
        this.$actions.notify.error(err)
      } else {
        this.$state.{% resourceName %} = {}

        this.$actions.notify.success('Successfully deleted')
        this.$router.push({ name: '{% pluralize resourceName %}-index' })
      }

      this.$state.{% resourceName %}IsLoading = false
    })
  }
}

