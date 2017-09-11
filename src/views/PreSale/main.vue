<template>
  <section id="presale" class="body-content">
    <Navbar-TokenSale></Navbar-TokenSale>
    <div id="presale__above-the-fold">
      <div class="presale__header  text-color--white content-container--medium content-container">
        <h2>Pre-Sale has ended.</h2>
        <br>
        <h1 class="uppercase"> Participate in main sale</h1>
        <Matryx-Btn class="sale" text="Purchase MTX" :handleClick="openSaleModal">
        </Matryx-Btn>
      </div>
    </div>
    <Token-Sale-Info></Token-Sale-Info>
  </section>
</template>

<script>
import NavbarTokenSale from '@/components/Navbar-Tokensale'
import SaleIcon from '@/components/Sale-Icon'
import GetNotified from '@/components/Get-Notified'
import Countdown from '@/components/Countdown'
import MatryxBtn from '@/components/Matryx-Btn'
import TokenSaleInfo from '@/views/Home/Token-Sale'

import { isPreSale } from '@/utils'
import { appAnalytics } from '@/analytics'

export default {
  name: 'PreSale',

  components: {
    NavbarTokenSale,
    SaleIcon,
    GetNotified,
    Countdown,
    MatryxBtn,
    TokenSaleInfo
  },

  mounted () {
    window.analytics.page('PreSale')

    if (isPreSale()) {
      this.showPurchaseBtn = true
    }
  },

  data () {
    return {
      rateBase: 1164.96662324,
      rate10: 1294.40736,
      rate15: 1370.54896,
      purchaseAmount: null,
      message: 'Pre-Sale Starts In',
      showPurchaseBtn: false
    }
  },

  computed: {
    end () {
      const date = 'September 6 2017 15:00:00 UTC'

      if (isPreSale()) {
        this.message = 'Pre-Sale Ends & Main Sale Starts In'
        return 'September 13 2017 14:59:59 UTC'
      } else {
        return date
      }
    },

    diff () {
      return this.mtxPresale - this.mtxRegular
    },

    mtxPresale () {
      if (this.purchaseAmount <= 0 && this.purchaseAmount < 150) {
        return Math.round(this.purchaseAmount * this.rateBase)
      }

      if (this.purchaseAmount >= 150 && this.purchaseAmount < 300) {
        return Math.round(this.purchaseAmount * this.rate10)
      }

      if (this.purchaseAmount >= 300 && this.purchaseAmount <= 80901.5) {
        return Math.round(this.purchaseAmount * this.rate15)
      }

      return this.mtxRegular
    },

    mtxRegular () {
      return Math.round(this.purchaseAmount * this.rateBase)
    }
  },

  methods: {
    openSaleModal () {
      appAnalytics.purchasePreSaleBtn('presale-page')
      this.$store.commit('showSaleModal', true)
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/css/colors';

  #presale__above-the-fold {
    padding-top: 50px;
    padding-bottom: 100px;
    margin-bottom: 0px;
    margin-top: -5px;
    border-radius: 0;
    background-image: url('../../assets/images/backgrounds/abovethefoldbkg.svg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: bottom;
    text-align: center;

    .presale__content {
      display: flex;
      justify-content: space-between;
      padding: 40px 20px 55px;

      & > .content-container--medium {
        width: 100%;
      }
    }
  }

  footer {
    margin-top: 0px;
  }

  .sale.matryx-button {
    &--blue {
      border: 1px solid #49b749;
      background-color: #49b749;
      color: rgba(255, 255, 255, 0.9);


      &:hover {
        border: 1px solid #FFF;
        background-color: $matryx-blue;
        color: #FFF;
      }
      &:active {
        position:relative;
        top: 2px;
      }
    }
  }
  /*----- MEDIA QUERIES -----*/

  @media screen and (max-width: 1000px) {
    #presale__above-the-fold {
      .presale__content {
        flex-direction: column;
        justify-content: center;
        align-items: center;

        & > .content-container--medium {
          margin-bottom: 40px;
          margin-top: 0;
          width: 80%;
        }
      }
    }
  }

</style>
