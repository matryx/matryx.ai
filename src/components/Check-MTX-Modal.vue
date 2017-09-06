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
        <p class="warn" v-if="hasInput">Please enter your ETH Address</p>
        <br>

        <button class="submit-btn matryx-button matryx-button--blue"
          @click.prevent="handleSubmit"
        >
          SUBMIT
        </button>

        <div v-if="mtxAmountAvailable">
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
// import axios from 'axios'
// import config from '../../config'

export default {
  name: 'CheckMTXModal',

  components: {
  },

  data () {
    return {
      hasInput: false,
      warnNoInput: false,
      mtxAmount: '',
      userEthAddress: '',
      mtxAmountAvailable: false
    }
  },

  computed: {
    ...mapState({
      showCheckMTXModal: state => state.showCheckMTXModal
    })
  },

  methods: {
    handleSubmit () {
      if (this.userEthAddress) {
        // start spinner
        this.hasInput = false
        this.$store.commit('togglePulseSpinner', true)
        setTimeout(() => {
          this.$store.commit('togglePulseSpinner', false)
          this.mtxAmountAvailable = true
          this.mtxAmount = '19384'
        }, 1500)
        // submit axios request to get data
        // set data end spinner
        // axios.post(`${config.app.contractServer}/api/token`, {
        //   mtxAddress: this.userEthAddress
        // })
        // .then((result) => {
        //   this.$store.commit('togglePulseSpinner', false)
        //   this.$store.commit('setEthAddress', result)
        // })
        // .catch((err) => {
        //   console.log('error', err)
        //   this.$store.commit('togglePulseSpinner', false)
        // })
      } else {
        this.$store.commit('togglePulseSpinner', false)
        this.hasInput = true
      }
    },

    closeModal () {
      this.mtxAmountAvailable = false
      this.mtxAmoutn = ''
      this.userEthAddress = ''
      this.$store.commit('showCheckMTXModal', false)
    }
  },

  mounted () {

  },

  destroyed () {

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
