<template>
  <div class="salemodal-contract-info">
    <h2 class="text-color--matryx-grey-blue">SALE CONTRACT INFO</h2>
    <br/>
    <b>Instructions: </b>
    <p>The following is the sale contract information needed in order to complete the MTX transaction using your Ethereum wallet. Take each value and paste it into the corresponding field in your wallet, along with the amount of ETH you wish to spend.

    <div v-if="showPreSale">
      <b class="uppercase">75 ETH is the minimum amount to make a purchase for the pre-sale.</b> <br/>
      <span style="text-decoration:underline; color: red;">Transactions less than 75 ETH will fail.</span>
      <br/>
      <p> Purchases between 150 ETH and 300 ETH will receive a 10% discount.
      <br/>
      Purchase 300 ETH and greater will receive a 15% discount.</p>
    </div>

    For detailed instructions, please refer to our <a href="https://blog.matryx.ai/matryx-pre-sale-how-to-participate-tips-on-staying-safe-711938733015" target="_blank">blog post.</a>

    </p>
    <div class="salemodal-contract-info__form">
        <!-- these should be click to copy
        cannot change input
         -->
      <label class="salemodal-contract-info__form__label" for="contract-address">Contract Address</label>
      <input class="salemodal-contract-info__form__input" id="saleAddress"
        :value="saleAddress" readonly
      >

      <button class="salemodal-contract-info__form__copy"
        @click="handleCopy('#saleAddress')"
      >
        Click to copy
      </button>


      <label class="salemodal-contract-info__form__label" for="data-field">Data Field</label>
      <input class="salemodal-contract-info__form__input" id="dataField" :value="dataField" readonly>
      <button class="salemodal-contract-info__form__copy"
        @click="handleCopy('#dataField')"
      >
        Click to copy
      </button>

      <label class="salemodal-contract-info__form__label" for="gas">Gas</label>
      <input class="salemodal-contract-info__form__input"
        :value="gas"
        type="text"
        id="gas" readonly
        >
      <button type="button"
        class="salemodal-contract-info__form__copy"
        @click="handleCopy('#gas')"
        >
        Click to copy
      </button>
    </div>
    <p>Transactions usually take several minutes to process, but may take longer.</p>
  </div>
</template>

<script>
  import { isPreSale } from '@/utils'

  export default {
    name: 'SaleModalContractInfo',

    props: {
      dataField: {
        type: String,
        default: ''
      },
      gas: {
        type: Number,
        default: ''
      },
      saleAddress: {
        type: String,
        default: ''
      },
      handleSubmit: {
        type: Function
      }
    },

    data () {
      return {
        showPreSale: false
      }
    },

    mounted () {
      if (isPreSale()) {
        this.showPreSale = true
      }
    },

    methods: {
      closeSaleModal () {
        this.$store.commit('clearContractInfo')
        this.$store.commit('toggleSaleContract', false)
        this.$store.commit('showSaleModal', false)
      },

      handleCopy (id) {
        var s = document.querySelector(id)
        s.select()
        document.execCommand('Copy')
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '../assets/css/colors.scss';

.salemodal-contract-info {
  z-index: 1000002;

  &__form {
    width: 100%;
    max-width: 475px;
    margin: 40px auto;

    &__label {
      display: block;
      text-align:left;
      font-size: 18px;
      color: $matryx-dark-grey;
    }

    &__input {
      width: 100%;
      padding: 5px 10px;
      font-size: 19px;
      background-color: $matryx-lighter-blue;
      color:$matryx-dark-blue;
      border:none;
    }

    &__copy {
      border: none;
      background-color: transparent;
      margin-bottom: 20px;
      font-size: 12px;
      width: 100%;
      text-align:right;
    }
  }

  &__participate {
    &--header {
      width: 100%;
      text-align:left;
      font-size: 18px;
      max-width: 400px;
      margin: 0 auto 10px;
      border-bottom: 2px solid $matryx-grey;
    }

    &--item {
      text-align:left;
      width: 100%;
      margin: 0 auto;
      max-width: 400px;

      a {
        color: $matryx-blue;

        &:hover {
          cursor:pointer;
          text-decoration: none;
          color: $matryx-grey;
        }
      }
    }
  }

  &__button {
    &--close {
      border: none;
      border-radius: 40px;
      width: 200px;
      background-color: $matryx-lighter-grey;
      color: $matryx-dark-blue;
      padding: 10px 20px;
      // margin-top: 40px;

      &:hover {
        cursor: pointer;
        background-color: $matryx-dark-blue;
        color: $matryx-lighter-grey;
      }
    }
  }

  &__check-balance {
    width: 100%;
    max-width: 430px;
    margin: 0 auto;
    padding: 20px;

    p {
      color: $matryx-dark-grey;
      font-size: 18px;
      text-decoration: underline;

      &:hover {
        color: $matryx-blue;
        cursor: pointer;
      }
    }

    ol {
      text-align:left;
    }
  }

}
</style>
