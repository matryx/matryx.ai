<template>
  <section class="check-mtx">
    <b-modal id="checkMTXModal"
      v-model="showSaleModal"
      hide-header
      hide-footer
      no-close-on-esc
      no-close-on-backdrop
      size="lg"
    >
    <div id="check-mtx--content">
      <div class="checkmtx__header">
        <img src="../assets/images/Matryx-Logo-Grey-CMYK.png" alt="">
        <div class="close-modal text-muted" @click.prevent="closeModal">
          X
        </div>
      </div>
      <div class="checkmtx__body">
        <div class="checkmtx__body__terms">
          <br/>
          <h3 class="text-color--matryx-grey-blue">CHECK MTX BALANCE</h3>
          <div class="checkmtx__body__terms__checklist">


            <button class="submit-btn matryx-button matryx-button--blue"
              @click.prevent="handleSubmit"
              :disabled="!allChecked"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
    </b-modal>
  </section>
</template>

<script>
import { appAnalytics } from '@/analytics'
import { mapState } from 'vuex'
import axios from 'axios'
import config from '../../config'

export default {
  name: 'CheckMTXModal',

  components: {
  },

  data () {
    return {
      email: '',
      saleTermsRead: {
        checked: false,
        enable: false
      },
      erc20WalletAddress: {
        checked: false,
        enable: false
      },
      noExchangeAddress: {
        checked: false,
        enable: false
      },
      havePrivateKeys: {
        checked: false,
        enable: false
      }
    }
  },

  computed: {
    ...mapState({
      showCheckMTXModal: state => state.showCheckMTXModal,
    })
  },

  methods: {
    handleSubmit () {
      if (this.hasEthAddress) {
        // start spinner
        this.warnNoInput = false;
        this.$store.commit('togglePulseSpinner', true)
        // submit axios request to get data
        // set data end spinner
        // axios.post(`${config.app.contractServer}/api/token`, {
        //   email: this.email,
        //   allVerified: this.allChecked
        // })
        // .then((result) => {
        //   this.$store.commit('setContractInfo', result.data.info)
        //   this.$store.commit('togglePulseSpinner', false)
        //   this.$store.commit('toggleSaleContract', true)
        // })
        // .catch((err) => {
        //   console.log('error', err)
        //   this.$store.commit('togglePulseSpinner', false)
        // })
      } else {
        this.warnNoInput = true
      }
    },

    closeModal () {
      this.$store.commit('clearContractInfo')
      this.$store.commit('toggleEthAddress', false)
      this.$store.commit('showSaleModal', false)
    }
  },

  mounted () {

  },

  destroyed () {

  }
}
</script>

<style lang="scss">
@import '../assets/css/colors';

section.check-mtx {
  margin: 0;
}

#showCheckMTXModal .modal-content {
  .close-modal {
    position: absolute;
    right: 20px;

    &:hover {
      cursor: pointer;
    }
  }
}

#check-mtx--content {
  height: calc(100% + 30px);
  width: calc(100% + 30px);
  position:relative;
  left: -15px;
  top: -15px;
  border-radius: 10px;
  overflow: hidden;
  background-color: #fff;

  .matryx-button--blue {
    max-width: 300px;

    &:hover {
      background-color: $light-green;
      border-color: $light-green;
    }
  }

  .checkmtx__header {
    height:50px;
    width: 100%;
    margin: 0;
    padding: 15px;
    position:relative;
    background-color: $matryx-lighter-grey;

    img {
      height: 100%;
      float: left;
    }
  }
  .checkmtx__body {
    padding: 15px;
    text-align:center;

    &__terms {

      h3 {
        margin-bottom: 20px;
      }

      &__document {
        width: calc(100% - 40px);
        max-height: 200px;
        margin: 0 auto;
        padding: 10px;
        text-align: left;
        overflow-y: scroll;
        overflow-x: hidden;
        border: 1px solid $matryx-dark-grey !important;

        &::-webkit-scrollbar {
          width: 1em;
        }
        &::-webkit-scrollbar-track {
          border-left: 1px solid $matryx-dark-grey;
        }
        &::-webkit-scrollbar-thumb {
          background-color: $matryx-dark-grey;
        }
      }

      &__checklist {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 30px 20px;

        .terms-email {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }

        .terms-email--input {
          padding: 5px 20px;
          width: 300px;
          height: 50px;
          font-size: 14px;

          &:focus {
            outline: none;
          }
        }

        p {
          font-size: 18px;
          margin-bottom: 5px;
        }

        .submit-btn:disabled {
          opacity: 0.4;
          box-shadow: none;
          cursor: not-allowed;

          &:hover {
            background-color: $matryx-blue;
          }
        }

        div {
          text-align:left;
          padding: 10px 20px;
        }
      }

      &__address {
        display: none;
      }
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}


</style>
