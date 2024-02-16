<template>
  <div class="about">
    <div class="header" />
    <v-row no-gutters>
      <v-spacer />
      <v-col cols="12" md="10">
        <v-sheet class="bio-wrapper">
          <div
            class="profile-image"
            :style="{
              border: `4px solid ${this.$vuetify.theme.currentTheme.primary}`
            }"
          >
            <img
              :alt="`${user.name} Profile Picture`"
              :src="profileImage.src"
            >
          </div>
          <v-row no-gutters>
            <div :style="{'padding-left': PROFILE_PIC_AVOIDANCE_PADDING, width: '100%'}" class="d-flex justify-space-between">
              <div class="bio-title">
                <div class="heading-3">{{ user.name }}</div>
                <div>{{ user.university }}</div>
                <div>{{ user.field }}</div>
              </div>
              <div class="btn-container">
                <v-btn
                  large
                  outlined
                  class="text-capitalize mr-1"
                  color="secondary"
                >
                  <span class="px-3">Edit Profile</span>
                </v-btn>
                <v-btn
                  large
                  class="text-capitalize ml-1"
                  color="secondary white--text"
                >
                  <span class="px-3">+ New Post</span>
                </v-btn>
              </div>
            </div>
          </v-row>
          <v-row no-gutters>
            <div class="pt-4" :style="{'padding-left': PROFILE_PIC_AVOIDANCE_PADDING}">
              {{ user.bio }}
            </div>
          </v-row>
        </v-sheet>
      </v-col>
      <v-spacer />
    </v-row>
  </div>
</template>

<script>

const PROFILE_PIC_AVOIDANCE_PADDING = '272px'

export default {
  name: 'AccountView',
  data () {
    return {
      profileImage: undefined
    }
  },
  computed: {
    PROFILE_PIC_AVOIDANCE_PADDING () {return PROFILE_PIC_AVOIDANCE_PADDING},
    user () {
      return this.$store.state.user
    }
  },
  mounted () {
    import(`@/assets/Images/Desktop/Profile/2x/${this.user.image}`).then(r => {
      let img = new Image()
      img.onload = () => this.profileImage = img
      img.src = r.default
    })
  }
}
</script>

<style scoped>
.about {
  width: 100%;
  background: url(../assets/Images/Desktop/Profile/Background/ellipse-bottom.png),
    url(../assets/Images/Desktop/Profile/Background/ellipse-middle.png),
    url(../assets/Images/Desktop/Profile/Background/ellipse-top.png);
  background-repeat: no-repeat;
  background-position: left -8% top 40%, left -13% top 40%, left -5% top 20%;
  background-size: 35%;
}
.header {
  height: 300px;
  width: 110%;
  transform: translate(-12px, -8px);
  background-image: url(../assets/Images/Desktop/Profile/2x/Profile-Cover-Photo-Desktop2x.jpg);
  background-size: cover;
}
.bio-wrapper {
  background: transparent;
  position: relative;
  &>.profile-image {
    position: absolute;
    top: -60px;
    left: 0;
    height: 250px;
    width: 250px;
    background: white;
    border-radius: 10px;
    &>img {
      height: 100%;
      width: 100%;
      border-radius: 10px;
    }
  }
  &>.bio-title {
    display: flex;
    flex-direction: column;
  }
  & .btn-container>* {
    border-radius: 10px;
  }
}
</style>