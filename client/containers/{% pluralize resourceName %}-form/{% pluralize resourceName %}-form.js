import {% pluralize resourceName %}Form from '../../components/{% pluralize resourceName %}-form'

export default {
  components: { {% pluralize resourceName %}Form },

  data () {
    return {
      {% resourceName %}: {},
      {% resourceName %}IsLoading: false
    }
  },

  watch: {

  },

  created () {
    let slug = this.$route.params.slug

    this.$mapState(['{% resourceName %}', '{% resourceName %}IsLoading'])

    if (slug) {
      this.$actions.{% pluralize resourceName %}.read(slug)
    } else {
      this.{% resourceName %} = {}
    }
  },

  methods: {
    onData (data) {
      let id = this.{% resourceName %}._id

      if (id) {
        this.$actions.{% pluralize resourceName %}.update(id, data)
      } else {
        this.$actions.{% pluralize resourceName %}.create(data)
      }
    }
  }
}
