import Vue from 'vue'
import Vuex from 'vuex'
import { setlStorage } from '../utils'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    showModal: false,
    showGetNotifiedModal: false,
    email: '',
    language: 'en'
  },
  getters: {

  },
  mutations: {
    showModal (state, show) {
      console.log('toggle modal', show)
      state.showModal = show
    },
    setEmail (state, email) {
      setlStorage('email', email)
      state.email = email
    },
    showGetNotifiedModal (state, show) {
      state.showGetNotifiedModal = show
    },
    setLanguage (state, language) {
      state.language = language
    }
  },
  strict: debug
})
