import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home/index'
import FAQ from '@/views/FAQ/index'
import TokenSale from '@/views/TokenSale/index'

// import Accordion from '@/views/FAQ/Accordion'
import About from '@/views/FAQ/Accordions/About'
import General from '@/views/FAQ/Accordions/GeneralFAQS'
// import Question from '@/views/FAQ/Accordion-Question'
import ErrorPage from '@/views/ErrorPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/faq/:accordion',
      // no worky
      // redirect: '/faq/about/who-is-matryx',
      component: FAQ,
      children: [
        {
          path: ':question',
          component: About
          // children: [
          //   {
          //     path: 'who-is-matryx',
          //     component: Accordion
          //   }
          // ]
        },
        {
          path: ':question',
          component: General
        }
      ]
    },
    {
      path: '/tokensale',
      name: 'TokenSale',
      component: TokenSale
    },
    {
      path: '/404',
      name: 'ErrorPage',
      component: ErrorPage
    },
    {
      path: '/faq',
      redirect: '/faq/about'
    }
    // {
    //   path: '*',
    //   redirect: '/404'
    // }
  ]
})
