import {% pluralize resourceName %}Index from '../../components/{% pluralize resourceName %}-index'

export default {
  components: { {% pluralize resourceName %}Index },

  data () {
    return {
      {% pluralize resourceName %}: [],
      {% pluralize resourceName %}IsLoading: false
    }
  },

  watch: {

  },

  created () {
    this.$mapState(['{% pluralize resourceName %}', '{% pluralize resourceName %}IsLoading'])
    this.$actions.{% pluralize resourceName %}.index()
  },

  methods: {

  }
}
