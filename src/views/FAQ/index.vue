<template>
<div class="body-content content-container content-container--large">
  <h1 class="font-">FAQ</h1>
  <aside class="faq-menu">
    <ul class="faq-menu__list">
      <li class="faq-menu__list__list-item" @click="navigateToRoute('about')">
        <span class="icon"><img src="../../assets/icons/icon-About.svg" alt=""></span>
        <router-link to="/faq/about">About Matryx</router-link>
      </li>
      <li class="faq-menu__list__list-item">
        <span class="icon"><img src="../../assets/icons/icon-General.svg" alt=""></span>
        <router-link to="/faq/general">General Inquiries</router-link>
      </li>
      <li class="faq-menu__list__list-item">
        <span class="icon"><img src="../../assets/icons/icon-Token.svg" alt=""></span>
        <router-link to="/faq/tokensale">Token Sale</router-link>
      </li>
<!--       <li class="faq-menu__list__list-item">
        <span class="icon"><img src="../../assets/icons/icon-Wallet.svg" alt=""></span>
        <router-link to="/faq/wallet">Token Wallet Management</router-link>
      </li> -->
      <li class="faq-menu__list__list-item">
        <span class="icon"><img src="../../assets/icons/icon-Presale.svg" alt=""></span>
        <router-link to="/faq/presale">Pre-Sale</router-link>
      </li>
      <li class="faq-menu__list__list-item">
        <span class="icon"><img src="../../assets/icons/icon-Troubleshooting.svg" alt=""></span>
        <router-link to="/faq/troubleshooting">Troubleshooting</router-link>
      </li>
    </ul>
    <ul class="faq-menu__list">
      <li class="faq-menu__list__list-item">
        <span class="icon"><img src="../../assets/icons/icon-Termsofsale.svg" alt=""></span>
        <router-link to="/faq/saleterms">Token Sale Terms</router-link>
      </li>
      <li class="faq-menu__list__list-item">
        <span class="icon"><img src="../../assets/icons/icon-Contact.svg" alt=""></span>
        <router-link to="/faq/contact">Contact</router-link>
      </li>
    </ul>
  </aside>
  <section class="faq content-container content-container--medium">
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </section>
</div>
</template>

<style lang="scss">
@import '../../assets/css/faq.scss';
</style>

<script>
export default {
  name: 'FAQ'
}
</script>
