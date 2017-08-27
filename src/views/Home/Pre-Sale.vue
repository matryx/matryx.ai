<template lang="html">
  <section>
    <div class="content-container content-container--large">

      <h3 class="section__header text--center">PRE-SALE</h3>
      <h2 class="text--center">Opening September 6, 2017</h2>
      <div class="icon-list">
        <SaleIcon
          v-for="icon in icons"
          :img="icon.img"
          :text="icon.text"
          :alt="icon.text"
        ></SaleIcon>
      </div>
    </div>
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
          text: 'Purchases Over 75 ETH Eligible for Pre-Sale'
        },
        {
          img: discount10,
          text: '150 ETH Eligible for 10% Discount'
        },
        {
          img: discount15,
          text: '300+ ETH Eligible for 15% Discount'
        },
        {
          img: upto50,
          text: 'Up to 50% of Total Sale Cap'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
/*@import '../../assets/css/colors.scss';*/

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

h2 {
  margin-bottom: 20px;
}
</style>
