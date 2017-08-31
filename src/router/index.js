import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import FAQ from '@/views/FAQ'

import About from '@/views/FAQ/About'
import AboutQAs from '@/views/FAQ/About-QAs'
import Contact from '@/views/FAQ/Contact'
import ContactQAs from '@/views/FAQ/Contact-QAs'
import General from '@/views/FAQ/General'
import GeneralQAs from '@/views/FAQ/General-QAs'
import Presale from '@/views/FAQ/Presale'
import PresaleQAs from '@/views/FAQ/Presale-QAs'
import SaleTerms from '@/views/FAQ/Sale-Terms'
import SaleTermsQAs from '@/views/FAQ/Sale-Terms-QAs'
import TokenSaleFAQ from '@/views/FAQ/Token-Sale'
import TokenSaleFAQQA from '@/views/FAQ/Token-Sale-QAs'
import Troubleshooting from '@/views/FAQ/Troubleshooting'
import TroubleshootingQAs from '@/views/FAQ/Troubleshooting-QAs'

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
      path: '/faq/contact',
      redirect: '/faq/contact/how-can-I-contact'
    },
    {
      path: '/faq/general',
      redirect: '/faq/general/why-use-a-blockchain'
    },
    {
      path: '/faq/presale',
      redirect: '/faq/presale/how-can-I-participate-in-the-presale'
    },
    {
      path: '/faq/saleterms',
      redirect: '/faq/saleterms/what-are-the-saleterms'
    },
    {
      path: '/faq/tokensale',
      redirect: '/faq/tokensale/how-can-I-participate-in-the-token-sale'
    },
    {
      path: '/faq/troubleshooting',
      redirect: '/faq/troubleshooting/i-cant-see-my-tokens'
    },
    {
      path: '/faq',
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
          component: Contact,
          children: [{
            path: ':question',
            component: ContactQAs
          }]
        },
        {
          path: 'general',
          component: General,
          children: [{
            path: ':question',
            component: GeneralQAs
          }]
        },
        {
          path: 'presale',
          component: Presale,
          children: [{
            path: ':question',
            component: PresaleQAs
          }]
        },
        {
          path: 'saleterms',
          component: SaleTerms,
          children: [{
            path: ':question',
            component: SaleTermsQAs
          }]
        },
        {
          path: 'tokensale',
          component: TokenSaleFAQ,
          children: [{
            path: ':question',
            component: TokenSaleFAQQA
          }]
        },
        {
          path: 'troubleshooting',
          component: Troubleshooting,
          children: [{
            path: ':question',
            component: TroubleshootingQAs
          }]
        }
      ]
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
