import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

const Home = () => import('@/views/Home')
const FAQ = () => import('@/views/FAQ')
const PressKit = () => import('@/views/PressKit')
const PreSale = () => import('@/views/PreSale')

const About = () => import('@/views/FAQ/About')
const AboutQAs = () => import('@/views/FAQ/About-QAs')
const Contact = () => import('@/views/FAQ/Contact')
const ContactQAs = () => import('@/views/FAQ/Contact-QAs')
const General = () => import('@/views/FAQ/General')
const GeneralQAs = () => import('@/views/FAQ/General-QAs')
const Presale = () => import('@/views/FAQ/Presale')
const PresaleQAs = () => import('@/views/FAQ/Presale-QAs')
const SaleTerms = () => import('@/views/FAQ/Sale-Terms')
const SaleTermsQAs = () => import('@/views/FAQ/Sale-Terms-QAs')
const TokenSaleFAQ = () => import('@/views/FAQ/Token-Sale')
const TokenSaleFAQQA = () => import('@/views/FAQ/Token-Sale-QAs')
const Troubleshooting = () => import('@/views/FAQ/Troubleshooting')
const TroubleshootingQAs = () => import('@/views/FAQ/Troubleshooting-QAs')

const ErrorPage = () => import('@/views/ErrorPage')

Vue.use(Router)

const router = new Router({
  mode: 'history',
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/tokensale',
      redirect: 'Home'
    },
    {
      path: '/token-sale',
      redirect: 'Home'
    },
    {
      path: '/faq',
      redirect: '/faq/about/what-is-matryx'
    },
    {
      path: '/faq/about',
      redirect: '/faq/about/what-is-matryx'
    },
    {
      path: '/faq/contact',
      redirect: '/faq/contact/how-can-I-contribute-to-matryx'
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
      redirect: '/faq/tokensale/why-is-matryx-conducting-a-token-sale'
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
      path: '/press-kit',
      name: 'PressKit',
      component: PressKit
    },
    {
      path: '/presskit',
      redirect: '/press-kit'
    },
    {
      path: '/pre-sale',
      name: 'PreSale',
      component: PreSale
    },
    {
      path: '/presale',
      redirect: '/pre-sale'
    },
    {
      path: '/404',
      name: 'ErrorPage',
      component: ErrorPage
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched[0] === from.matched[0]) {
    return next()
  }

  store.commit('toggleRouteLoaded', false)
  setTimeout(() => {
    next()
  }, 2000)
})

router.afterEach((to, from) => {
  store.commit('toggleRouteLoaded', true)
})

export default router
