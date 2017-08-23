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
          <h2 class="text-color--matryx-blue">Thank you for subscribing</h2>
          <p>Please enter your intended purchasing amount:</p>
          <p v-show="noIntendedAmount" class="warn">Please select a value</p>

          <form>
            <div v-for="(amt, index) in amounts">
              <input :id="index"
                name="intendedAmount"
                type="radio"
                :value="amt"
                v-model="intendedAmount"
              >
                <label :for="index"><span></span>{{ amt }}</label>
              <br>
            </div>
            <input type="submit"
              text="Submit"
              @click.prevent="handleSubmit"
            >
          </form>

        </div>
      </b-modal>
  </section>
</template>

<script>
export default {
  data () {
    return {
      amounts: ['0-75 ETH', '150 ETH', '300 ETH', '750 ETH', '750+ ETH'],
      intendedAmount: 'None Selected',
      showModal: true,
      noIntendedAmount: false
    }
  },

  methods: {
    handleSubmit () {
      console.log('Intended Amount', this.intendedAmount)
    }
  }
}
</script>

<style lang="scss">
  @import '../assets/css/colors';

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
  }
</style>
