<template>
  <div class="salemodal-contract-info">
    <h2 class="text-color--matryx-grey-blue">SALE CONTRACT</h2>
    <form class="salemodal-contract-info__form">
        <!-- these should be click to copy
        cannot change input
         -->
      <label class="salemodal-contract-info__form__label" for="contract-address">Contract Address</label>
      <input class="salemodal-contract-info__form__input"
        type="text"
        id="contract-address"
        readonly
        :value="contractAddress"
      >
      <button type="text"
        class="salemodal-contract-info__form__copy"
        v-clipboard="contractAddress"
        @click.prevent="handleClick"
        >
        Click to copy
      </button>


      <label class="salemodal-contract-info__form__label" for="data-field">Data Field</label>
      <input class="salemodal-contract-info__form__input"
        type="text"
        id="data-field"
        readonly
        :value="dataField"
      >
      <button type="text"
        class="salemodal-contract-info__form__copy"
        v-clipboard="dataField"
        >
        Click to copy
      </button>


      <label class="salemodal-contract-info__form__label" for="gas">Gas</label>
      <input class="salemodal-contract-info__form__input"
        v-model="gas"
        type="text"
        >
      <button type="button"
        class="salemodal-contract-info__form__copy"
        v-clipboard:copy="gas"
        >
        Click to copy
      </button>

      <div id="message">{{ message }}</div>
      <button data-clipboard-target="#message">
        Copy!
      </button>


    </form>
    <h4 class="salemodal-contract-info__participate--header">How to Participate Using:</h4>
    <hr>
    <p class="salemodal-contract-info__participate--item">
      <a href="#" class="text-color--matryx-blue">MetaMask &rsaquo;</a>
    </p>
    <p class="salemodal-contract-info__participate--item">
      <a href="#" class="text-color--matryx-blue">Mist &rsaquo;</a>
    </p>
    <p class="salemodal-contract-info__participate--item">
      <a href="#" class="text-color--matryx-blue">MyEtherWallet &rsaquo;</a>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'SaleModalContractInfo',

    computed: {
      dataField () {
        return this.$store.state.dataField
      }
    },

    props: {
      // dataField: {
      //   type: String,
      //   default: '0x89r2jf2nklf2klafeafwefewafwef'
      // },
      // gas: {
      //   type: String,
      //   default: '23423423'
      // },
      contractAddress: {
        type: String,
        default: '02394lxjrfafwewae23'
      }
    },

    data () {
      return {
        gas: '120381293081293018293',
        message: 'HAIAHAIA'
      }
    },

    methods: {
      handleSuccess (e) {
        e.preventDefault()
        console.log('e', e)
      },

      handleClick () {
        console.log('click')
      },
      onCopy: function (e) {
        alert('You just copied: ' + e.text)
      },
      onError: function (e) {
        alert('Failed to copy texts')
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
      color: $classic-grey;
    }

    &__input {
      width: 100%;
      padding: 5px 10px;
      font-size: 20px;
      background-color: $light-grey;
      border:none;
      margin-bottom: 20px;
    }
  }
}
</style>
