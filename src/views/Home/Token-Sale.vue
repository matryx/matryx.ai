<template lang="html">
  <section>
    <div class="content-container content-container--large">

      <h3 class="section__header text--center">TOKEN SALE</h3>
      <h2 class="text--center">Launches September 13, 2017</h2>
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
          text: '314,159,265.0 Total MTX Supply'
        },
        {
          img: allocated60,
          text: '60% of Total MTX Supply Allotted for Sale'
        },
        {
          img: cap,
          text: '161,803.0 ETH Sale Cap'
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
