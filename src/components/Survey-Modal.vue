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
                {{ amt }}
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

</style>
