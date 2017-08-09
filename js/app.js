///// ---------- VUE ROUTER ---------- /////
const homeTemplate = require('../templates/home.html');
const faqTemplate = require('../templates/faq.html');
const tokensaleTemplate = require('../templates/tokensale.html');

const Home = { template : homeTemplate }
const FAQ = { template : faqTemplate }
const Tokensale = { template : tokensaleTemplate }

const routes = [
  { path: '/', component: Home },
  { path: '/faq', component: FAQ },
  { path: 'tokensale', component: Tokensale }
]

const router = new VueRouter ({  routes })
const matryxRouter = new Vue({  router }).$mount('#matryx')

///// ---------- end VUE ROUTER ---------- /////
