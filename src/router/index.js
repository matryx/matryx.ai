import Vue from 'vue'
import Router from 'vue-router'
import HOME from '@/views/Home'
import FAQ from '@/views/FAQ'
import TOKENSALE from '@/views/TOKENSALE'

Vue.use(Router)

export default new Router({

  routes: [
    {
      path: '/',
      name: 'HOME',
      component: HOME
    },
    {
      path: '/faq',
      name: 'FAQ',
      component: FAQ
    },
    {
      path: '/tokensale',
      name: 'TOKENSALE',
      component: TOKENSALE
    }
  ]
})
