import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "../views/AboutView.vue";

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    icon: 'mdi-home-outline',
  },
  {
    path: '/search',
    name: 'Search',
    icon: 'mdi-magnify',
    disabled: true
  },
  {
    path: '/notifications',
    name: 'Notifications',
    icon: 'mdi-bell-outline',
    disabled: true
  },
  {
    path: '/messages',
    name: 'Messages',
    icon: 'mdi-message-text-outline',
    disabled: true
  },
  {
    path: '/account',
    name: 'Account',
    component: AboutView,
    icon: 'mdi-account-circle-outline'
  },
  {
    path: '/create-post',
    name: 'Create Post',
    icon: 'mdi-plus-box-outline',
    disabled: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
