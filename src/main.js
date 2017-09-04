// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import SocialSharing from 'vue-social-sharing'

import 'bootstrap/dist/css/bootstrap.css'
import 'jquery'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.filter('two_digits', function (value) {
  const val = value.toString()
  if (val && val.length <= 1) {
    return '0' + val
  }
  return val
})

Vue.filter('num_commas', function (value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
})

Vue.use(BootstrapVue)
Vue.use(SocialSharing)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
