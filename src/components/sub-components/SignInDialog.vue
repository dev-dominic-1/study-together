<template>
  <v-dialog
    :value="value"
    persistent
    fullscreen
  >
    <v-card>CONTENT</v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'SignInDialog',
  props: {
    value: Boolean,
  }
}
</script>