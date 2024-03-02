<template>
  <div>
    {{ refreshKey }}
    <slot v-bind="{refreshKey}" />
  </div>
</template>

<script>
function* keyGenerator (prefix) {
  for (let i = 0; ; i++) {
    yield `${prefix}-${i}`
  }
}
export default {
  name: 'ComponentRefresher',
  props: {
    uniqueKeyPrefix: {
      type: String,
      default: 'key-gen'
    },
  },
  data () {
    return {
      generator: keyGenerator(),
      refreshKey: this.uniqueKeyPrefix
    }
  },
  methods: {
    refresh (timeout = 0) {
      setTimeout(() => this.refreshKey = this.generator.next().value, timeout)
    }
  }
}
</script>