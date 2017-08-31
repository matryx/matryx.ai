import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home/index'
import FAQ from '@/views/FAQ/index'
import TokenSale from '@/views/TokenSale/index'

import About from '@/views/FAQ/Accordions/About'
import AboutQAs from '@/views/FAQ/Accordions/About-QAs'
import Contact from '@/views/FAQ/Accordions/Contact'
import General from '@/views/FAQ/Accordions/GeneralFAQS'
import Presale from '@/views/FAQ/Accordions/Presale'
import SaleTerms from '@/views/FAQ/Accordions/Sale-Terms'
import TokenSaleFAQs from '@/views/FAQ/Accordions/Token-Sale'
import Troubleshooting from '@/views/FAQ/Accordions/Troubleshooting'
import Wallet from '@/views/FAQ/Accordions/Wallet'

import ErrorPage from '@/views/ErrorPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
          return savedPosition
        } else {
          return { x: 0, y: 0 }
        }
      }
    },
    {
      path: '/faq',
      redirect: '/faq/about/who-is-matryx'
    },
    {
      path: '/faq/about',
      redirect: '/faq/about/who-is-matryx'
    },
    {
      path: '/faq',
      // no worky
      // redirect: '/faq/about/who-is-matryx',
      component: FAQ,
      children: [
        {
          path: 'about',
          component: About,
          children: [{
            path: ':question',
            component: AboutQAs
          }]
        },
        {
          path: 'contact',
          component: Contact
        },
        {
          path: 'general',
          component: General
        },
        {
          path: 'presale',
          component: Presale
        },
        {
          path: 'saleterms',
          component: SaleTerms
        },
        {
          path: 'tokensale',
          component: TokenSaleFAQs
        },
        {
          path: 'troubleshooting',
          component: Troubleshooting
        },
        {
          path: 'wallet',
          component: Wallet
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
    }
    // {
    //   path: '*',
    //   redirect: '/404'
    // }
  ]
})
