export default {
  props: {
    {% resourceName %}: Object,
    {% resourceName %}IsLoading: Boolean,
    userIsAuthenticated: Boolean
  },

  data () {
    return {

    }
  },

  mounted () {

  },

  methods: {
    onDeleteClick () {
      if (window.confirm('Aray you sure?')) {
        this.$emit('delete', this.{% resourceName %}._id)
      }
    }
  }
}
