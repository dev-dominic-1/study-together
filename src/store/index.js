import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
  plugins: [createPersistedState()],
  modules: {
  },
  state () {
    return {
      users: [
        {
          name: 'Annie',
          username: 'annie', // `username` is UNIQUE
          lowRes: '@/assets/Images/Desktop/Profile/1x/Profile Annie Profile Desktop1x.jpg',
          highRes: '@/assets/Images/Desktop/Profile/2x/Profile Annie Profile Desktop2x.jpg'
        },
        {
          name: 'Anton',
          username: 'anton',
          lowRes: '@/assets/Images/Desktop/Profile/1x/Profile Anton Profile Desktop1x.jpg',
          highRes: '@/assets/Images/Desktop/Profile/2x/Profile Anton Profile Desktop2x.jpg'
        }
      ],
      friendsPosts: [
        {
          username: 'brianna',
          timestamp: '18 Hours Ago',
          content: 'I’d appreciate any feedback I can get on this before I turn it in tomorrow. Thanks!',
          contentImages: [

          ]
        }
      ]
    }
  }
})

export default store
