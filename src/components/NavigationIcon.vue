<template>
  <div class="wrapper">
    <v-icon
      large
      :color="disabled ? undefined : 'text'"
    >{{ icon }}</v-icon>
    <div
      v-if="selected"
      class="underline"
    >
      <v-icon
        large
        color="text"
      >
        mdi-minus
      </v-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavigationIcon',
  props: {
    icon: String,
    selected: Boolean,
    disabled: Boolean,
  }
}
</script>

<style scoped>
.wrapper {
  position: relative;
  &>.underline {
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-18px);
  }
}
</style>