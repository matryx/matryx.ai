<template>
  <div class="salemodal-contract-info">
    <h2 class="text-color--matryx-grey-blue">SALE CONTRACT</h2>
    <div class="salemodal-contract-info__form">
        <!-- these should be click to copy
        cannot change input
         -->
      <label class="salemodal-contract-info__form__label" for="contract-address">Contract Address</label>
      <input class="salemodal-contract-info__form__input" id="contractAddress"
        :value="contractAddress" readonly
      >

      <button class="salemodal-contract-info__form__copy"
        @click="handleCopy('#contractAddress')"
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
    <h4 class="salemodal-contract-info__participate--header">How to participate using:</h4>
    <p class="salemodal-contract-info__participate--item">
      <a href="#" class="text-color--matryx-blue">MetaMask &rsaquo;</a>
    </p>
    <p class="salemodal-contract-info__participate--item">
      <a href="#" class="text-color--matryx-blue">Mist &rsaquo;</a>
    </p>
    <p class="salemodal-contract-info__participate--item">
      <a href="#" class="text-color--matryx-blue">MyEtherWallet &rsaquo;</a>
    </p>
    <button type="button"
      class="salemodal-contract-info__button--close"
      @click.prevent="handleSubmit"
    >
      I'm done!
    </button>
  </div>
</template>

<script>
  export default {
    name: 'SaleModalContractInfo',

    props: {
      dataField: {
        type: String,
        default: ''
      },
      gas: {
        type: String,
        default: ''
      },
      contractAddress: {
        type: String,
        default: ''
      },
      handleSubmit: {
        type: Function
      }
    },

    methods: {
      // closeSaleModal () {
      //   this.$store.commit('clearContractInfo')
      //   this.$store.commit('toggleSaleContract', false)
      //   this.$store.commit('showSaleModal', false)
      // },

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
  &__form {
    width: 100%;
    max-width: 400px;
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
      font-size: 20px;
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
      margin-top: 40px;

      &:hover {
        cursor: pointer;
        background-color: $matryx-dark-blue;
        color: $matryx-lighter-grey;
      }
    }
  }

}
</style>
