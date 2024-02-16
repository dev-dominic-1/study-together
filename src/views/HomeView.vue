<template>
  <div class="home">
    <v-toolbar elevation="1" color="transparent" height="96px" class="toolbar">
      <v-row no-gutters>
        <v-spacer />
        <v-col cols="12" md="8" class="pb-0 mb-n16">
          <v-tabs v-model="tab" color="text" background-color="transparent">
            <v-tab class="text-capitalize heading-2" :key="TRENDING">
              {{ TRENDING.toLowerCase() }}
            </v-tab>
            <v-tab class="text-capitalize heading-2" :key="FRIENDS">
              {{ FRIENDS.toLowerCase() }}
            </v-tab>
          </v-tabs>
        </v-col>
        <v-spacer />
      </v-row>
    </v-toolbar>
  </div>
</template>

<script>
const [FRIENDS, TRENDING] = ['FRIENDS', 'TRENDING']
export default {
  name: 'HomeView',
  data () {
    return {
      tab: 1,
      tabs: [
        {text: 'Trending', value: TRENDING},
        {text: 'Friends', value: FRIENDS}
      ]
    }
  },
  computed: {
    TRENDING () {return TRENDING},
    FRIENDS () {return FRIENDS},
  }
}
</script>

<style scoped>
.home {
  width: 100%;
  background: url(../assets/Images/Desktop/Home/Background/ellipse-left-bottom.png) no-repeat fixed,
    url(../assets/Images/Desktop/Home/Background/ellipse-left-middle.png) no-repeat fixed,
    url(../assets/Images/Desktop/Home/Background/ellipse-left-top.png) no-repeat fixed,
    url(../assets/Images/Desktop/Home/Background/ellipse-right-bottom.png) no-repeat fixed,
    url(../assets/Images/Desktop/Home/Background/ellipse-right-middle.png) no-repeat fixed,
    url(../assets/Images/Desktop/Home/Background/ellipse-right-top.png) no-repeat fixed;
  background-position: left top 50%,
    left 10% top 30%,
    left 20% top 30%,
    top right,
    top -3% right -5%,
    top -6% right -10%;
  background-size: 35%;
}
.v-tab:not(.v-tab--active) {
  font-weight: normal;
}
</style>
