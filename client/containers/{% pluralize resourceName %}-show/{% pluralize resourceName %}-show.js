import {% pluralize resourceName %}Show from '../../components/{% pluralize resourceName %}-show'

export default {
  components: { {% pluralize resourceName %}Show },

  data () {
    return {
      {% resourceName %}: {},
      {% resourceName %}IsLoading: false,
      userIsAuthenticated: false
    }
  },

  watch: {

  },

  created () {
    this.$mapState(['{% resourceName %}', '{% resourceName %}IsLoading', 'userIsAuthenticated'])
    this.$actions.{% pluralize resourceName %}.read(this.$route.params.slug)
  },

  methods: {
    onDelete (id) {
      this.$actions.{% pluralize resourceName %}.remove(id)
    }
  }
}
