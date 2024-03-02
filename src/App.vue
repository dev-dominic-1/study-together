<template>
  <v-app
    id="app"
    :style="themeStyleObject"
  >
    <div class="d-flex">
      <v-navigation-drawer
        id="nav-drawer"
        permanent
        :style="{background: $vuetify.theme.currentTheme.background, minWidth: '380px'}"
        class="nav-drawer elevation-3"
      >
        <v-list>
          <v-list-item
            v-for="(el, index) of routes"
            :key="`nav-element-${index}`"
            :disabled="el.disabled"
            @click="() => {
              if (el.requireSignIn && !userSignedIn) {
                signInDialogConfig.open = true
                signInDialogConfig.callback = (user) => el.signInCallback(context, user)
              } else $router.push(el.path)
            }"
          >
            <v-list-item-content>
              <v-row
                no-gutters
                class="align-center"
              >
                <v-spacer />
                <v-col
                  cols="2"
                  class="d-flex justify-center heading-3"
                >
                  <navigation-icon
                    :disabled="el.disabled"
                    :icon="el.icon"
                    :selected="$route.path === el.path"
                  />
                </v-col>
                <v-spacer />
                <v-col
                  cols="6"
                  class="heading-3"
                >
                  {{ el.name }}
                </v-col>
                <v-spacer />
              </v-row>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-fade-transition hide-on-leave>
        <router-view
          style="max-height: 100vh; overflow-y: scroll; overflow-x: hidden;"
          class="pb-10"
        />
      </v-fade-transition>
    </div>
    <message-box />
    <api-errors />
    <sign-in-dialog
      v-model="signInDialogConfig.open"
      @success="signInDialogConfig.callback($event)"
    />
  </v-app>
</template>

<script>
import {routes} from "@/router";
import NavigationIcon from "@/components/NavigationIcon.vue";
import MessageBox from "@/components/MessageBox.vue";
import ApiErrors from "@/components/ApiErrors.vue";
import SignInDialog from "@/components/sign-in/SignInDialog.vue";
export default {
  components: {SignInDialog, MessageBox, NavigationIcon, ApiErrors},
  data () {
    return {
      signInDialogConfig: {
        open: false,
        callback: () => {},
      },
    }
  },
  mounted () {
    this.$store.commit('setUser', {})
  },
  computed: {
    context () {return this},
    userSignedIn () {return !!this.$store.state.user?.id},
    routes () {return routes},
    themeStyleObject () {
      const theme = this.$vuetify.theme.currentTheme
      return {
        background: theme.background,
        color: theme.text
      }
    },
    secondary () {
      const theme = this.$vuetify.theme.currentTheme
      return theme.secondary
    },
    text () {
      const theme = this.$vuetify.theme.currentTheme
      return theme.text
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
body {
  scrollbar-width: 0;
  &::-webkit-scrollbar {
    display: none !important;
  }
}
.v-text-field.v-text-field--outlined:not(.custom) .v-input__slot {
  &>fieldset {
    border: 2px solid v-bind(secondary);
  }
  & label {
    color: v-bind(text);
  }
}
.v-btn {
  text-transform: capitalize;
}
#app {
  & .timestamp {
    opacity: 0.6;
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
    font-weight: 600;
  }
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  & .nav-drawer {
    z-index: 2;
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
