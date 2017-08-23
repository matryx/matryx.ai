import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions: {
    toggleModal ({ commit }, data) {
      this.survey.open = true
      this.survey.location = data.location
    },
    submitSurvey ({ commit }, data) {

    }
  },
  getters: {

  },
  mutations: {
    survey: {
      submitted: false,
      open: false,
      location: ''
    },
    email: ''
  }
  strict: debug
})



import * as types from './mutation-types'

export const addToCart = ({ commit }, product) => {
  if (product.inventory > 0) {
    commit(types.ADD_TO_CART, {
      id: product.id
    })
  }
}
