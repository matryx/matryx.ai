<template>
  <section class="check-mtx">
    <b-modal id="showCheckMTXModal"
      v-model="showCheckMTXModal"
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
        <br/>
        <h3 class="text-color--matryx-grey-blue">CHECK MTX BALANCE</h3>

        <input class="checkmtx__body__input"
          type="text"
          placeholder="Enter ETH Address"
          v-model="userEthAddress"
        >
        <br>

        <button class="submit-btn matryx-button matryx-button--blue"
          @click.prevent="handleSubmit"
          :disabled="!userEthAddress"
        >
          SUBMIT
        </button>

        <div v-if="userEthAddressError">
          <p class="warn"> {{ userEthAddressError }} </p>
        </div>

        <div v-if="mtxAmount">
          <p class="mtx-amount-text">You have
            <span class="text-color--matryx-blue">{{ mtxAmount }}</span>
            MTX
          </p>
        </div>
    </div>
    </div>
    </b-modal>
  </section>
</template>

<script>
// import { appAnalytics } from '@/analytics'
import { mapState } from 'vuex'
import { isValidETHAddress } from '@/utils'
import axios from 'axios'
import config from '../../config'

export default {
  name: 'CheckMTXModal',

  data () {
    return {
      mtxAmount: '',
      userEthAddress: '',
      userEthAddressError: ''
    }
  },

  computed: {
    ...mapState({
      showCheckMTXModal: state => state.showCheckMTXModal
    })
  },

  methods: {
    handleSubmit () {
      if (!this.userEthAddress) {
        return
      }

      const addressCheckResult = isValidETHAddress(this.userEthAddress)

      if (addressCheckResult !== 'Address is valid') {
        this.userEthAddressError = addressCheckResult
        return
      }

      this.$store.commit('togglePulseSpinner', true)

      axios.post(`${config.app.host}/api/balance`, {
        mtxAddress: this.userEthAddress
      })
      .then((result) => {
        this.mtxAmount = result.data.balance
        this.userEthAddressError = ''
        this.$store.commit('togglePulseSpinner', false)
      })
      .catch(() => {
        this.userEthAddressError = 'Error. Please try again later.'
        this.$store.commit('togglePulseSpinner', false)
      })
    },

    closeModal () {
      this.mtxAmount = ''
      this.userEthAddress = ''
      this.userEthAddressError = ''
      this.$store.commit('showCheckMTXModal', false)
    }
  }
}
</script>
<!-- Yuku kawa no nagare ha taezu shite -->
<!-- Shika mo moto no mizu ni arazu -->
<style lang="scss">
@import '../assets/css/colors';

.mtx-amount-text {
  font-size: 24px;
}

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
  top: 20px;
  border-radius: 10px;
  overflow: hidden;
  background-color: #fff;

  .matryx-button--blue {
    max-width: 300px;

    &:hover {
      background-color: $light-green;
      border-color: $light-green;
    }

    &:disabled {
      opacity: 0.5;

      &:hover {
        cursor: not-allowed;
        background-color: $matryx-blue;
        border-color: transparent;
      }
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

    > h3 {
      margin-bottom: 50px;
    }

    &__input {
      width: 413px;
      padding: 5px 10px;
    }
  }
}

.warn {
  color: $matryx-red;
}


</style>
