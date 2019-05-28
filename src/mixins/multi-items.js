const parentMixin = {
  mounted () {
    if (this.value >= 0) {
      this.currentIndex = this.value
    }
    this.updateIndex()
  },
  methods: {
    updateIndex () {
      if (!this.$children || !this.$children.length) return
      this.number = this.$children.length
      let children = this.$children
      for (let i = 0; i < children.length; i++) {
        children[i].currentIndex = i
        if (children[i].currentSelected) {
          this.index = i
        }
      }
    }
  },
  props: {
    value: Number
  },
  watch: {
    currentIndex (val, oldVal) {
      oldVal >= 0 && this.$children[oldVal] && (this.$children[oldVal].currentSelected = false)
      val >= 0 && this.$children[val] && (this.$children[val].currentSelected = true)
      this.$emit('input', val)
      this.$emit('on-index-change', val, oldVal)
    },
    index (val) {
      this.currentIndex = val
    },
    value (val) {
      this.index = val
    }
  },
  data () {
    return {
      index: -1,
      currentIndex: this.index,
      number: this.$children.length
    }
  }
}

const childMixin = {
  props: {
    selected: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
        currentIndex: -1,
        currentSelected: this.selected
    }
  },
  mounted () {
    this.$parent.updateIndex()
  },
  beforeDestroy () {
    const _this = this
    this.$nextTick(() => {
        _this.$parent.updateIndex()
    })
  },
  methods: {
    onItemClick (hasLink) {
      if (this.$parent.preventDefault) {
        this.$parent.$emit('on-before-index-change', this.currentIndex)
        return
      }
      if (typeof this.disabled === 'undefined' || this.disabled === false) {
        this.currentSelected = true
        this.$parent.currentIndex = this.currentIndex
        this.$nextTick(() => {
          this.$emit('on-item-click', this.currentIndex)
        })
      }
    }
  },
  watch: {
    currentSelected (val) {
      if (val) {
        this.$parent.index = this.currentIndex
      }
    },
    selected (val) {
      this.currentSelected = val
    }
  }
}

export {
  parentMixin,
  childMixin
}
