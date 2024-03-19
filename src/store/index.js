import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import Post from "@/models/Post";
import {POST_STATS} from "@/constants";

Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
  plugins: [createPersistedState()],
  modules: {
  },
  state () {
    return {
      user: {
        name: 'Troy Bennett',
        username: 'troy',
        university: 'Greendale Community College',
        field: 'Air Conditioning Repair',
        bio: 'Let\'s join forces and navigate this academic adventure together! 🚀 🤝 #StudentLife #ClassOf2026 #FutureLeadership 🌟',
        image: 'Profile-Profile-Picture-Desktop2x.jpg',
        friends: [
          {
            name: 'Pierce Johnson',
            imageName: 'Profile_Pierce_Profile_Desktop2x.jpg'
          },
          {
            name: 'Jeff Westing',
            imageName: 'Profile_Jeff_Profile_Desktop2x.jpg'
          },
          {
            name: 'Shirley Overstreet',
            imageName: 'Profile_Shirley_Profile_Desktop2x.jpg'
          },
          {
            name: 'Anton Demarco',
            imageName: 'Profile_Anton_Profile_Desktop2x.jpg'
          },
          {
            name: 'Annie Barnes',
            imageName: 'Profile_Annie_Profile_Desktop2x.jpg'
          },
          {
            name: 'Sam Brown',
            imageName: 'Profile_Sam_Profile_Desktop2x.jpg'
          },
        ],
        posts: [
          new Post('troy', '16 Hours Ago', 'Can I get some feedback on this essay I wrote for Spanish?', [], POST_STATS.DOUBLE_CHECK.key)
        ]
      },
      users: [
        {
          name: 'Troy Bennett',
          username: 'troy',
          lowRes: 'Profile-Troy-Profile-Desktop1x.jpg',
          highRes: 'Profile-Troy-Profile-Desktop2x.jpg'
        },
        {
          name: 'Annie',
          username: 'annie', // `username` is UNIQUE
          lowRes: '@/assets/Images/Desktop/Profile/1x/Profile-Annie-Profile-Desktop1x.jpg',
          highRes: '@/assets/Images/Desktop/Profile/2x/Profile_Annie_Profile_Desktop2x.jpg'
        },
        {
          name: 'Anton',
          username: 'anton',
          lowRes: '@/assets/Images/Desktop/Profile/1x/Profile-Anton-Profile-Desktop1x.jpg',
          highRes: '@/assets/Images/Desktop/Profile/2x/Profile_Anton_Profile_Desktop2x.jpg'
        },
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
