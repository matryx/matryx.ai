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
    showPulseSpinner: false,
    showSaleContract: false,
    showCheckMTXModal: false,
    contractInfo: {
      saleAddress: '',
      dataField: '',
      gas: ''
    }
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
    showCheckMTXModal (state, show) {
      state.showCheckMTXModal = show
    },
    toggleRouteLoaded (state, loaded) {
      state.routeLoaded = loaded
    },
    togglePulseSpinner (state, show) {
      state.showPulseSpinner = show
    },
    setContractInfo (state, info) {
      state.contractInfo = info
    },
    clearContractInfo (state) {
      state.contractInfo = {
        saleAddress: '',
        dataField: '',
        gas: ''
      }
    },
    toggleSaleContract (state, show) {
      state.showSaleContract = show
    }
  },
  strict: debug
})
