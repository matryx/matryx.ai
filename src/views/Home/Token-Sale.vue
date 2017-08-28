<template lang="html">
  <section class="content-container content-container--large">
    <h2 class="section__header text--center title">TOKEN SALE</h2>
    <h3 class="text--center sub-title">Launches September 13, 2017</h3>
    <div class="icon-list">
      <SaleIcon
        v-for="(icon, index) in icons"
        :img="icon.img"
        :text="icon.text"
        :alt="icon.text"
        :key="index"
      ></SaleIcon>
    </div>
  </section>
</template>

<script>
import SaleIcon from '../../components/Sale-Icon'

import matryx from '../../assets/icons/icon-sale-matryx.png'
import cap from '../../assets/icons/icon-sale-cap.svg'
import allocated60 from '../../assets/icons/icon-sale-60allocated.svg'
import mtx from '../../assets/icons/icon-sale-mtx.png'

export default {
  name: 'TokenSale',
  components: {
    SaleIcon
  },
  data () {
    return {
      icons: [
        {
          img: mtx,
          text: '314,159,265 Total MTX Supply'
        },
        {
          img: allocated60,
          text: '60% of Total MTX Supply Allotted for Sale'
        },
        {
          img: cap,
          text: '161,803 ETH Sale Cap'
        },
        {
          img: matryx,
          text: 'Address will ONLY be posted on matryx.ai'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
section.content-container {
  margin-top: 0;
  padding: 40px 0 80px;

  .title {
    font-size: 24px;
  }

  .sub-title {
    font-size: 28px;
    margin-bottom: 20px;
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
