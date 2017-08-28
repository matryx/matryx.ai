<template lang="html">
  <section class="content-container content-container--large">
    <h2 class="section__header text--center title">PRE-SALE</h2>
    <h3 class="sub-title text--center">Opening September 6, 2017</h3>
    <div class="icon-list">
      <SaleIcon
        v-for="(icon, index) in icons"
        :img="icon.img"
        :text="icon.text"
        :alt="icon.text"
        :key="index"
      ></SaleIcon>
    </div>
    <p class="discount">*Discounts only apply for purchases during the Pre-Sale.</p>
  </section>
</template>

<script>
import SaleIcon from '../../components/Sale-Icon'

import discount10 from '../../assets/icons/icon-sale-10discount.svg'
import discount15 from '../../assets/icons/icon-sale-15discount.svg'
import eth from '../../assets/icons/icon-sale-eth.png'
import upto50 from '../../assets/icons/icon-sale-upto50.svg'

export default {
  name: 'PreSale',
  components: {
    SaleIcon
  },
  data () {
    return {
      icons: [
        {
          img: eth,
          text: '75 ETH Minimum Purchase'
        },
        {
          img: discount10,
          text: 'Purchases > 150 ETH Eligible for 10% Discount*'
        },
        {
          img: discount15,
          text: 'Purchases > 300 ETH Eligible for 15% Discount*'
        },
        {
          img: upto50,
          text: 'Up to 50% of Total Sale Cap Alloted for Pre-Sale'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
section.content-container {
  padding: 20px 0 40px;

  .title {
    font-size: 24px;
  }

  .sub-title {
    font-size: 28px;
    margin-bottom: 20px;
  }

  .discount {
    font-size: smaller;
    text-align:center;
    margin-top: 50px;
  }

  .icon-list {
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-around;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
}
</style>
