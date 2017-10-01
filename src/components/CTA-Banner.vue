<template lang="html">
  <section :class="{ 'grey-bkg': greyBkg, 'white': white, 'white-bkg':whiteBkg, 'bkg-footer':footerBkg, 'blueBkg': blueBkg}" class="cta-banner">
    <div class="cta content-container content-container--large">
      <h4 class="cta__main text-color--matryx-blue">
        <span v-if=" language === 'ru' ">Присоединяйтесь к продаже токенов</span>
      	<span v-else-if=" language === 'ch' ">加入代币销售</span>
      	<span v-else-if=" language === 'ge' ">Nehmen Sie am Token-Verkauf teil</span>
      	<span v-else-if=" language === 'ja' ">トークンセールに参加</span>
      	<span v-else-if=" language === 'ko' ">토큰 판매에 참여하세요</span>
      	<span v-else>Stay Updated</span>
      </h4>

      <h6 :class="{ 'lighter-text':lighterText  }" class="cta__desc text-color--matryx-dark-grey">
        <span v-if=" language === 'ru' ">Введите свой адрес электронной почты, чтобы оставаться в курсе новостей о начале продажи токенов</span>
      	<span v-else-if=" language === 'ch' ">输入您的电子邮件地址，以便收到代币销售的相关更新</span>
      	<span v-else-if=" language === 'ge' ">Geben Sie Ihre E-Mail-Adresse ein, um über den Start des Token-Verkaufs auf dem Laufenden zu bleiben.</span>
      	<span v-else-if=" language === 'ja' ">電子メールアドレスを入力して、トークンセールの開始時にすぐ通知を受けてください</span>
      	<span v-else-if=" language === 'ko' ">귀하의 이메일 주소를 입력하시고 토큰 판매의 런칭에 대한 최신 알림을 받으세요.</span>
      	<span v-else>Enter your email address to stay up to date on the Matryx Platform.</span>
      </h6>
      <Get-Notified  :ctaLocation="ctaLocation">
      </Get-Notified>
    </div>
  </section>
</template>

<script>
import GetNotified from '@/components/Get-Notified'

export default {
  name: 'CTABanner',

  components: { GetNotified },

  props: {
    white: Boolean,
    greyBkg: Boolean,
    whiteBkg: Boolean,
    footerBkg: Boolean,
    lighterText: Boolean,
    ctaLocation: String,
    blueBkg: Boolean
  },
  computed: {
    language () {
      return this.$store.state.language
    }
  }
}
</script>

<style lang="scss">
@import '../assets/css/colors';

.cta {
  text-align: center;
}
.cta__form {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}
.white {
  color: white;
}

.cta__main {
  font-size: 26px;
  margin-bottom: 15px;
}

.cta__desc {
  font-size: 16px;
}

.cta-middle-banner {
  position: relative;

  .cta-banner {
    margin: 0;
    position: relative;
    padding: 80px 0;
  }
}

.lighter-text {
  color: #fff !important;
  opacity: 0.9;
}

.white-bkg {
  background-color: #333C44;
  background-image: url('../assets/images/backgrounds/whitewave.svg');
  background-size: cover;
  margin:-20px 0;
  background-position: center;
  padding: 80px 0px;
}

.grey-bkg {
  background-image: url('../assets/images/backgrounds/greywave.svg');
  background-size:cover;
  background-position: center;
  color: $white;
}

.bkg-footer {
  background-image: url('../assets/images/backgrounds/bkg-footer.svg');
  background-size:cover;
  background-repeat: no-repeat;
}

.blueBkg {
  background-image: url('../assets/images/backgrounds/bluewave.svg');
  background-size:cover;
  background-repeat: no-repeat;
  background-position:center;
}

@media screen and (min-width: 2900px) {
  .blueBkg {
    background-image: none;
    background: rgb(8,31,54); /* Old browsers */
    background: -moz-linear-gradient(-45deg, rgba(8,31,54,1) 1%, rgba(19,72,99,1) 100%, rgba(92,95,101,1) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(-45deg, rgba(8,31,54,1) 1%,rgba(19,72,99,1) 100%,rgba(92,95,101,1) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(135deg, rgba(8,31,54,1) 1%,rgba(19,72,99,1) 100%,rgba(92,95,101,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#081f36', endColorstr='#5c5f65',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  }
  .grey-bkg {
    background-image:none;
    background: rgb(42,46,50); /* Old browsers */
    background: -moz-radial-gradient(center, ellipse cover, rgba(42,46,50,1) 1%, rgba(92,95,101,1) 100%, rgba(92,95,101,1) 100%); /* FF3.6-15 */
    background: -webkit-radial-gradient(center, ellipse cover, rgba(42,46,50,1) 1%,rgba(92,95,101,1) 100%,rgba(92,95,101,1) 100%); /* Chrome10-25,Safari5.1-6 */
    background: radial-gradient(ellipse at center, rgba(42,46,50,1) 1%,rgba(92,95,101,1) 100%,rgba(92,95,101,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2a2e32', endColorstr='#5c5f65',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  }
  .white-bkg {
    background-image: none;
    background-color:transparent;
  }
}

@media screen and (max-width: 550px) {

 .cta-middle-banner .cta-banner  {
    position: relative;
    padding: 180px 0 90px;
    // margin-top: -130px;
  }

 section.cta-banner.white-bkg {
    padding: 140px 0px;
    margin-top: -180px;
  }
}

</style>
