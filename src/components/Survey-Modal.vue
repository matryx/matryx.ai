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
          <!-- <div v-show="!submitted"> -->
            <h2 class="text-color--matryx-blue">
              <span v-if=" language === 'ru' ">Спасибо, что подписались</span>
      				<span v-else-if=" language === 'ch' ">感谢订阅</span>
      				<span v-else-if=" language === 'ge' ">Danke fürs Abonnieren</span>
      				<span v-else-if=" language === 'ja' ">ご購読いただきありがとうございます</span>
      				<span v-else-if=" language === 'ko' ">구독해 주셔서 감사합니다</span>
      				<span v-else>Thank you for subscribing</span>
            </h2>
            <p>
              <span v-if=" language === 'ru' ">Токены распределяются в порядке очереди. Пожалуйста, выберите, сколько MTX вы планируете купить:</span>
      				<span v-else-if=" language === 'ch' ">代金券以先到先得的原则分发，请选择你计划购买的 MXT 的价值：</span>
      				<span v-else-if=" language === 'ge' ">Die Ausgabe der Tokens erfolgt nach dem Windhundverfahren. Bitte wählen Sie den MTX-Betrag, den Sie kaufen wollen:</span>
      				<span v-else-if=" language === 'ja' ">トークン配布は先着順に行われます。 購入ご希望のMTXの値を選択してください:</span>
      				<span v-else-if=" language === 'ko' ">토큰의 배분은 선착순으로 이루어집니다. 구매하려고 하시는 MTX의 액수를 선택해 주세요:</span>
      				<span v-else>Token distribution is done on a first-come, first-serve basis. Please select the value of MTX you plan to purchase:</span>
            </p>
            <p v-show="noIntendedAmount" class="warn">
              <span v-if=" language === 'ru' ">необходимые</span>
      				<span v-else-if=" language === 'ch' ">需要</span>
      				<span v-else-if=" language === 'ge' ">Erforderlich</span>
      				<span v-else-if=" language === 'ja' ">必修</span>
      				<span v-else-if=" language === 'ko' ">필수의</span>
      				<span v-else>Please select a value</span>
            </p>

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
              <!-- <input type="submit"
                text="Submit"
                @click.prevent="handleSubmit"
              > -->
              <button type="submit"
                @click.prevent="handleSubmit">
                <span v-if=" language === 'ru' ">Отправить</span>
        				<span v-else-if=" language === 'ch' ">提交</span>
        				<span v-else-if=" language === 'ge' ">Absenden</span>
        				<span v-else-if=" language === 'ja' ">送信</span>
        				<span v-else-if=" language === 'ko' ">제출</span>
        				<span v-else>Submit</span>
              </button>
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
      intendedAmount: 'None Selected',
      // showModal: false,
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
    },
    language () {
      return this.$store.state.language
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
