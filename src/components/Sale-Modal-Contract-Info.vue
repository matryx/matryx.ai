<template>
  <div class="salemodal-contract-info">
    <h2 class="text-color--matryx-grey-blue">
      <span v-if=" language === 'ch' ">销售合约明细</span>
      <span v-else>SALE CONTRACT INFO</span></h2>
    <br/>
    <b>
      <span v-if=" language === 'ch' ">指令：</span>
      <span v-else>Instructions: </span>
    </b>
    <p>
      <span v-if=" language === 'ch' ">以下是如有需要利用您的以太钱包交易MTX币的销售合约信息。请黏贴并复制所有同等的信息到您的以太钱包中，并且明确表明您在本次所需花费的以太币。</span>
      <span v-else>The following is the sale contract information needed in order to complete the MTX transaction using your Ethereum wallet. Take each value and paste it into the corresponding field in your wallet, along with the amount of ETH you wish to spend.</span>
    <br>

    <h5>
      <span v-if=" language === 'ch' ">如果需要更明确的购买指引信息，请浏览<a href="https://blog.matryx.ai/matryx-pre-sale-how-to-participate-tips-on-staying-safe-711938733015" target="_blank">我们的博客</a></span>
      <span v-else>For detailed instructions, please refer to our <a href="https://blog.matryx.ai/matryx-pre-sale-how-to-participate-tips-on-staying-safe-711938733015" target="_blank">blog post.</a></span>
    </h5>

    </p>
    <div class="salemodal-contract-info__form">
        <!-- these should be click to copy
        cannot change input
         -->
      <label class="salemodal-contract-info__form__label" for="contract-address">
        <span v-if=" language === 'ch' ">购买地址</span>
        <span v-else>Sale Address <small><span class="text-color--green uppercase">*required</span></small></span>
      </label>
      <input class="salemodal-contract-info__form__input" id="saleAddress"
        :value="saleAddress" readonly
      >

      <button class="salemodal-contract-info__form__copy"
        @click="handleCopy('#saleAddress')"
      >
        Click to copy
      </button>

      <label class="salemodal-contract-info__form__label" for="gas">
        <span v-if=" language === 'ch' ">油量</span>
        <span v-else>Gas<small class="text-color--green uppercase">*recommended</small>
        </span>
        <br/><small>
          <span v-if=" language === 'ch' ">所有低于此数据则可能导致一次失败的</span>
          <span v-else>Using less than this amount may result in a failed transaction.</span>
        </small>
      </label>
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

      <label class="salemodal-contract-info__form__label" for="data-field">
        <span v-if=" language === 'ch' ">信息</span>
        <span v-else>Data <small class="text-color--green uppercase">*required</small></span>
        <br/>
        <small>
          <span v-if=" language === 'ch' ">当您发送金额时，您需要有一个信息库。取决于不同的钱包，这一选项也许会在“高级”中</span>
          <span v-else>You <em>must</em> have a Data field when you send your transaction.<br/> Depending on your wallet, this field may be under 'Advanced'. </span>
        </small>
      </label>
      <input class="salemodal-contract-info__form__input" id="dataField" :value="dataField" readonly>
      <button class="salemodal-contract-info__form__copy"
        @click="handleCopy('#dataField')"
      >
        Click to copy
      </button>

    </div>
    <p>
      <span v-if=" language === 'ch' ">交易通常会通过几分钟短暂的时间，也可能会更长。</span>
      <span v-else>Transactions usually take several minutes to process, but may take longer.</span>
    </p>
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

    computed: {
      language () {
        return this.$store.state.language
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
