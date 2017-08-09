import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import FAQ from '@/views/FAQ'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/faq',
      name: 'FAQ',
      component: FAQ
    }
  ]
})
