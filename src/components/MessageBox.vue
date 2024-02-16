<template>
  <div class="wrapper px-4 secondary-accent-2 body-4 elevation-2" :class="{open}">
    <div
      class="d-flex align-center justify-space-between"
      @click="open = !open"
    >
      Messages
      <v-btn icon @click.stop="open = !open">
        <v-icon :class="{rotated: open}">
          mdi-chevron-up
        </v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessageBox',
  data () {
    return {
      open: false,
    }
  }
}
</script>

<style scoped>
.wrapper {
  transition: all 0.3s ease-in-out;
  height: 52px;
  position: fixed;
  bottom: 0;
  right: 5vw;
  border: 4px solid;
  border-radius: 10px 10px 0 0;
  width: 15vw;
  &>div {
    cursor: pointer;
  }
  & .rotated {
    transition: transform ease-in-out 0.15s;
    transform: rotate(-180deg);
  }
  &.open {
    height: 60vh;
  }
}
</style>