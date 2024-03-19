<template>
  <v-card height="fit-content" color="background" class="pa-0">
    <div class="grid-wrapper">
      <img
        :src="image.src"
        :alt="friend.name"
      >
      <div class="pa-2 text-pre-wrap">{{ friend.name }}</div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'FriendCard',
  props: {
    friend: {
      type: Object,
      default () {return {}}
    }
  },
  data () {
    return {
      image: {}
    }
  },
  mounted () {
    import(`@/assets/Images/Desktop/Profile/2x/${this.friend.imageName}`).then(data => {
      let img = new Image()
      img.onload = () => this.image = img
      img.src = data.default
    })
  }
}
</script>

<style lang="scss" scoped>
.v-card {
  border-radius: 12px;
}
.grid-wrapper {
  display: grid;
  grid-template-rows: 3fr 2fr;
  &>img {
    border-radius: 10px 10px 5px 5px;
    max-width: 100%;
  }
}
</style>