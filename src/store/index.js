import Vue from 'vue'
import Vuex from 'vuex'
import { setlStorage } from '../utils'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    showModal: false,
    showGetNotifiedModal: false,
    showSaleModal: false,
    email: '',
    language: 'en',
    routeLoaded: false,
    showPulseSpinner: false
    dataField: 'hahfwejkfalwehflweaf'
  },
  getters: {

  },
  mutations: {
    showModal (state, show) {
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
    },
    showSaleModal (state, show) {
      state.showSaleModal = show
    },
    toggleRouteLoaded (state, loaded) {
      state.routeLoaded = loaded
    },
    togglePulseSpinner (state, show) {
      state.showPulseSpinner = show
    }
  },
  strict: debug
})
