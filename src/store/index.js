import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    showModal: false,
    email: ''
  },
  getters: {

  },
  mutations: {
    showModal (state, show) {
      console.log('toggle modal', show)
      state.showModal = show
    },
    setEmail (state, email) {
      state.email = email
    }
  },
  strict: debug
})
