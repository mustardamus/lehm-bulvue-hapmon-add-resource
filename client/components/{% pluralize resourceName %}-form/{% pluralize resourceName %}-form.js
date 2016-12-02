export default {
  mixins: [require('../../mixins/validate')],

  props: {
    {% resourceName %}: Object,
    {% resourceName %}IsLoading: Boolean
  },

  watch: {
    {% resourceName %}: 'on{% resourceName %}Change'
  },

  data () {
    return {
      errors: {},
      orgFields: [],
      fields: {
        name: '',
        slug: ''
      },
      rules: {
        name: '!isEmpty,isAscii',
        slug: '!isEmpty,isAscii'
      }
    }
  },

  mounted () {
    this.orgFields = Object.keys(this.fields)
    this.$el.querySelectorAll('input')[0].focus()
  },

  methods: {
    on{% resourceName %}Change (data) {
      let fields = {}

      for (let fieldName of this.orgFields) {
        fields[fieldName] = data[fieldName]
      }

      this.fields = fields
    },

    onSubmit () {
      if (this.$validate()) {
        this.$emit('data', this.fields)
      }
    }
  }
}
