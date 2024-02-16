<template>
  <div id="app" :style="themeStyleObject">
    <v-container fluid class="d-flex">
      <v-navigation-drawer
          permanent
          :style="{background: $vuetify.theme.currentTheme.background}"
          class="nav-drawer"
      >
        <v-list>
          <v-list-item
              v-for="(el, index) of navElements"
              :key="`nav-element-${index}`"
              @click="$router.push(el.to)"
          >
            <v-list-item-content>
              <div class="d-flex justify-center">
                <v-icon class="pr-3">{{ el.icon }}</v-icon>
                <span>{{ el.text }}</span>
              </div>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <router-view />
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navElements: [
        {text: 'Home', icon: 'mdi-home-outline', to: '/'},
        {text: 'About', icon: 'mdi-information', to: '/about'}
      ]
    }
  },
  computed: {
    themeStyleObject () {
      const theme = this.$vuetify.theme.currentTheme
      return {
        background: theme.background,
        color: theme.text
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  & a {
    color: aqua;
    text-decoration: none;
  }
  display: flex;
  font-family: 'Montserrat', serif;
  font-size: 16px;
  & .body-2 {
    font-family: 'Hind', serif;
  }
  & .body-3 {
    font-family: 'Hind', serif;
    font-size: 14px;
  }
  & .body-4 {
    font-weight: bold;
    font-family: 'Hind', serif;
    font-size: 14px;
  }
  & *[role=button] {
    font-weight: 600;
  }
  & .heading-1 {
    font-size: 32px;
  }
  & .heading-2 {
    font-size: 24px;
  }
  & .heading-3 {
    font-size: 24px;
    font-weight: bold;
  }
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  & .nav-drawer {
    min-height: 100vh;
    max-height: 100vh;
  }
}

nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
