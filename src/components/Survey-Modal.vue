<template>
  <section class="survey-modal">
    <!--
      BARBARA:
      All clicks on <Get-Notified> component should open the thankYouModal modal after a 2 second animation I already added.
      When clicking on the <Get-Notified> component in the getNotifiedModal modal below it should close by calling this.getNotifiedModal = !this.getNotifiedModal
      and then it should open the thankYouModal modal, again after the 2 second animation
      I think that's it.
      I'm working on the styling and email validation
     -->
      <b-modal id="thankYouModal"
        v-model="showModal"
        hide-header
        hide-footer
        no-close-on-esc
        no-close-on-backdrop
      >
        <div id="thank-you--body">
          <div class="close-modal text-muted" @click.prevent="closeModal">
            X
          </div>
          <div v-show="!submitted">
            <h2 class="text-color--matryx-blue">
              Thank you for subscribing
            </h2>
            <p>Token distribution is done on a first-come, first-serve basis. Please select the value of MTX you wish you purchase:</p>
            <p v-show="noIntendedAmount" class="warn">Please select a value</p>

            <form>
              <div v-for="(amt, index) in amounts">
                <input :id="index"
                  name="intendedAmount"
                  type="radio"
                  :value="amt.display"
                  v-model="intendedAmount"
                >
                  <label :for="index"><span></span>{{ amt.display }} ETH</label>
                <br>
              </div>
              <input type="submit"
                text="Submit"
                @click.prevent="handleSubmit"
              >
            </form>
          </div>
        </div>
      </b-modal>
  </section>
</template>

<script>
import { appAnalytics } from '@/analytics'

export default {
  data () {
    return {
      amounts: [{
        display: '0-75',
        label: '0-75eth'
      }, {
        display: '75-150',
        label: '75-150eth'
      }, {
        display: '150-300',
        label: '150-300eth'
      }, {
        display: '300-750',
        label: '300-750eth'
      }, {
        display: '750+',
        label: '750+eth'
      }],
      // showModal: false,
      intendedAmount: 'None Selected',
      noIntendedAmount: false,
      submitted: false
    }
  },

  computed: {
    showModal () {
      return this.$store.state.showModal
    },
    email () {
      return this.$store.state.email
    }
  },

  methods: {
    handleSubmit () {
      console.log('Intended Amount', this.intendedAmount)
      // Analytics
      appAnalytics.surveyModal(this.email, this.intendedAmount)
      // Reset intended amount
      this.intendedAmount = 'None Selected'
      // Close modal
      this.$store.commit('showModal', false)
    },

    closeModal () {
      this.$store.commit('showModal', false)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/css/colors';

  section {
    margin: 0 ;
  }

  #thank-you--body {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    text-align: center;

    label {
      margin: 5px 10px;

      span {
        vertical-align: text-top;
      }
      span::before {
        content: '';
        width: 20px;
        height: 20px;
        border: 1px solid #071828;
        border-radius: 100%;
        display: inline-block;
        position:relative;
        top: 2px;
      }
      span::after {
        content: '';
        width: 14px;
        color: #ffffff;
        position: relative;
        right: 17px;
        bottom: 1px;
        height: 14px;
        border-radius: 100%;
        display: inline-block;
      }
    }

    input[type="radio"] {
      display:none;

      &:hover {
        cursor: pointer;
      }
    }

    input:checked + label{
       span::after{
        background-color: #071828;
      }
    }

    input[type="submit"] {
      width: 120px;
      padding: 5px 10px;
      margin-top: 10px;
      background-color:#FFF;
      border: 1px solid $matryx-blue;
      border-radius: 40px;
    }
    input[type="submit"]:hover,
    input[type="submit"]:focus {
      cursor:pointer;
      color: #FFF;
      background-color: $matryx-blue;
    }

    .close-modal {
      position: absolute;
      right: 20px;

      &:hover {
        cursor: pointer
      }
    }
  }
</style>
