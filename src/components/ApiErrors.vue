<template>
  <div class="wrapper">
    <v-fade-transition group>
      <v-snackbar
        v-for="(error, index) of $store.state.apiErrors"
        :key="`error-index-${index}`"
        :value="true"
        rounded="pill"
        color="error darken-1"
        :style="{transform: `translateY(calc(-64px*${index}))`}"
      >
        <div class="d-flex align-center justify-space-between">
          <div>{{ error }}</div>
          <v-btn
            icon
            class="ml-2"
            @click="$store.commit('removeApiError', index)"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
      </v-snackbar>
    </v-fade-transition>
  </div>
</template>

<script>
export default {
  name: 'ApiErrors',
  data () {
    return {
      clearTimeout: undefined
    }
  },
  watch: {
    '$store.state.apiErrors': {
      handler () {
        if (this.clearTimeout) clearTimeout(this.clearTimeout)
        this.clearTimeout = setTimeout(() => this.$store.commit('clearApiErrors'), 6000)
      },
      deep: true
    }
  }
}
</script>

<style scoped>
.wrapper {
  max-height: 60vh;
  overflow-y: scroll;
}
</style>