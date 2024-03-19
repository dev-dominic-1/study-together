<template>
  <v-card elevation="3" color="background" class="wrapper mx-3 mt-n2 mb-5" min-height="450px">
    <v-card-title class="d-flex align-center justify-space-between">
      <div class="d-flex">
        <v-avatar>
          <v-img :src="userImage" :alt="`${user.name} Post`" />
        </v-avatar>
        <div class="d-flex flex-column">
          <span class="body-1">{{ user.name }}</span>
          <span class="body-2 timestamp">{{ post.timestamp }}</span>
        </div>
      </div>
      <post-stat v-if="post.stat" :type="post.stat" />
    </v-card-title>
    <v-card-text class="px-6">
      <span class="text--text">{{ post.content }}</span>
      <v-row no-gutters class="pt-6" style="height: 100%">
        <v-col cols="6" class="px-3">
          <v-sheet height="calc(100% - 4px)" class="d-flex align-center justify-center">
            Image 1
          </v-sheet>
        </v-col>
        <v-col cols="6" class="px-3">
          <v-sheet height="calc(100% - 4px)" class="d-flex align-center justify-center">
            Image 2
          </v-sheet>
        </v-col>
      </v-row>
    </v-card-text>
<!--    <hr class="divider">-->
    <v-card-actions class="justify-space-between top-shadow">
      <v-icon>mdi-heart</v-icon>
      <span class="body-1">Comment</span>
      <v-icon>mdi-export-variant</v-icon>
    </v-card-actions>
  </v-card>
</template>

<script>
import Post from "@/models/Post";
import PostStat from "@/components/sub-components/PostStat.vue";

export default {
  name: 'PostCard',
  components: {PostStat},
  props: {
    post: Post,
  },
  data () {
    return {
      user: {},
      userImage: {},
    }
  },
  mounted () {
    this.user = this.post.getUser(this)
    import(`@/assets/Images/Desktop/Profile/2x/${this.user.highRes}`).then(r => {
      let img = new Image()
      img.onload = () => this.userImage = img
      img.src = r.default
    })
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: grid;
  grid-template-rows: auto 1fr auto;
}
.divider {
  margin: auto auto -1px auto;
  border-color: lightgrey;
  border-radius: 999px;
  width: 95%;
}
.top-shadow {
  box-shadow: 0 -3px 10px lightgrey;
}
</style>