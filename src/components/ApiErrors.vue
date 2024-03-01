<template>
  <div class="wrapper">
    <v-snackbar
      v-for="(error, index) of $store.state.apiErrors"
      :key="`error-index-${index}`"
      :value="true"
      :timeout="4000"
      rounded="pill"
      color="error darken-1"
      :style="{transform: `translateY(calc(-64px*${index}))`}"
    >
      {{ error }}
      <v-btn
        icon
        class="ml-2"
        @click="$store.commit('removeApiError', index)"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: 'ApiErrors',
  data () {
    return {
      show: true,
      errors: []
    }
  },
}
</script>

<style scoped>
.wrapper {
  max-height: 60vh;
  overflow-y: scroll;
}
</style>