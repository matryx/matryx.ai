<template>
  <section class="sale-modal">
    <b-modal id="showSaleModal"
      v-model="showSaleModal"
      hide-header
      hide-footer
      no-close-on-esc
      no-close-on-backdrop
      size="lg"
    >
    <div id="sale-modal--content">
      <div class="salemodal__header">
        <img src="../assets/images/Matryx-Logo-Grey-CMYK.png" alt="">
        <div class="close-modal text-muted" @click.prevent="closeModal">
          X
        </div>
      </div>
      <div class="salemodal__body">
        <div class="salemodal__body__terms">
          <br/>
          <h3 class="text-color--matryx-grey-blue">MATRYX TOKEN SALE TERMS</h3>
          <div class="salemodal__body__terms__document" id="sale-terms">
            {{ tokenSaleTerms }}
          </div>
          <div class="salemodal__body__terms__checklist">
            <Checkbox name="saleTermsRead" :obj="saleTermsRead">
              <span slot="label">
                I have read and agree to the Sale Terms of the Matryx Token Sale
              </span>
            </Checkbox>
            <Checkbox name="erc20WalletAddress" :obj="erc20WalletAddress">
              <span slot="label">
                I understand and agree that I must use a valid ERC20 compatible wallet address
              </span>
            </Checkbox>
            <Checkbox name="noExchangeAddress" :obj="noExchangeAddress">
              <span slot="label">
                I understand and agree that the address I use must not be an exchange address
              </span>
            </Checkbox>
            <Checkbox name="havePrivateKeys" :obj="havePrivateKeys">
              <span slot="label">
                I understand and agree that if I use an exchange address I must own the private keys
              </span>
            </Checkbox>

            <div class="terms-email">
              <input class="terms-email--input" type="text" placeholder="Email Address" v-model="email"/>
              <span class="text-smaller">* Sign up to receive updates</span>
            </div>

            <button class="submit-btn matryx-button matryx-button--blue"
              @click.prevent="handleSubmit"
              :disabled="!allChecked"
            >
              SUBMIT
            </button>
          </div>
        </div>

        <Sale-Modal-Contract-Info class="salemodal__body__address">
        </Sale-Modal-Contract-Info>
      </div>
    </div>
    </b-modal>
  </section>
</template>

<script>
import { appAnalytics } from '@/analytics'
import { mapState } from 'vuex'
import Checkbox from '@/components/Checkbox'
import SaleModalContractInfo from '@/components/Sale-Modal-Contract-Info'

export default {
  name: 'SaleModal',

  components: {
    Checkbox,
    SaleModalContractInfo
  },

  data () {
    return {
      tokenSaleTerms: `ipsum aute excepteur dolor ullamco nulla quis. Aliquip non excepteur in aliquip occaecat dolore aute anim qui in do nisi exercitation. Pariatur elit occaecat dolor magna ad fugiat dolor fugiat. Pariatur fugiat et minim ut elit cillum dolor ut occaecat cillum reprehenderit exercitation. Adipisicing anim mollit aliquip et fugiat eiusmod deserunt esse pariatur dolore occaecat anim dolor quis velit veniam culpa. Ex eu enim cillum voluptate veniam tempor cillum incididunt eiusmod irure qui. Mollit quis non aliqua ad elit pariatur velit aliquip velit ut. Ea qui ut tempor adipisicing incididunt labore adipisicing dolor nisi ipsum labore nostrud. In aliqua Lorem minim Lorem ea exercitation laborum tempor sit esse est anim dolor. Quis cillum nostrud aliquip labore in sit officia mollit ipsum excepteur irure. Magna esse ipsum nulla aliquip veniam do consectetur magna ex minim id mollit anim aliqua.lor nisi ipsum labore nostrud. In aliqua Lorem minim Lorem ea exercitation laborum tempor sit esse est anim dolor. Quis cillum nostrud aliquip labore in sit officia mollit ipsum excepteur irure. Magna esse ipsum nulla aliquip veniam do consectetur magna ex minim id mollit anim aliqua. Sit exercitation non id dolore consectetur est tempor culpa elit magna amet ea. Id ullamco pariatur magna ut cupidatat anim non adipisicing. Commodo ex non velit dolor elit do esse veniam tempor mollit eiusmod minim exercitation. Adipisicing elit sunt proident dolor commodo sunt aute aliqua duis anim dolore aliquip eiusmod. Ei Sit exercitation non id dolore consectetur est tempor culpa elit magna amet ea. Id ullamco pariatur magna ut cupidatat anim non adipisicing. Commodo ex non velit dolor elit do esse veniam tempor mollit eiusmod minim exercitation. Adipisicing elit sunt proident dolor commodo sunt aute aliqua duis anim dolore aliquip eiusmod. Eiusmod excepteur nulla qui veniam in amet culpa ad dolore adipisicing non dolore id irure magna. Fugiat cupidatat aliquip eu adipisicing aliquip incididunt reprehenderit sint. Nostrud fugiat eiusmod officia cillum sint fugiat Lorem ut minim et sunt.'`,
      email: '',
      dataField: '',
      gas: '',
      contractAddress: '',
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
    allChecked () {
      if (!this.saleTermsRead.checked || !this.erc20WalletAddress.checked ||
        !this.noExchangeAddress.checked || !this.havePrivateKeys.checked) {
        return false
      }
      return true
    },
    ...mapState({
      showSaleModal: state => state.showSaleModal,
      language: state => state.language
    })
  },

  methods: {
    handleSubmit () {
      appAnalytics.surveyModal(this.email, this.intendedAmount)

      if (this.allChecked) {
        console.log('wheeee')
      } else {
        console.log('boooo')
      }
      // // Check for checkmarks
      // if () {
      //   // Show next page
      // } else {
      //   // showwarning
      // }
    },

    closeModal () {
      this.$store.commit('showSaleModal', false)
    }
  },

  mounted () {
    const vm = this
    var saleTerms = document.querySelector('#sale-terms')
    saleTerms.addEventListener('scroll', function () {
      if (this.scrollHeight - (this.offsetHeight - 2) === this.scrollTop) {
        vm.saleTermsRead.enable = true
        vm.erc20WalletAddress.enable = true
        vm.noExchangeAddress.enable = true
        vm.havePrivateKeys.enable = true
      }
    })
  }
}
</script>

<style lang="scss">
@import '../assets/css/colors';

section.sale-modal {
  margin: 0;
}

#showSaleModal .modal-content {
  .close-modal {
    position: absolute;
    right: 20px;

    &:hover {
      cursor: pointer;
    }
  }
}

#sale-modal--content {
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

  .salemodal__header {
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
  .salemodal__body {
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



</style>
