<template>
  <div class="media-mentions bkg-color--white">
    <div class="content-container content-container--large text-center">
      <h2 class="text-color--matryx-grey">
        <span v-if=" language === 'ru' ">
          Было показано в
        </span>
        <span v-else-if=" language === 'ch' ">
          刊登在
        </span>
        <span v-else-if=" language === 'ge' ">
          Vorgestellt in
        </span>
        <span v-else-if=" language === 'ja' ">
          以下のメディアで取り上げられました:
        </span>
        <span v-else-if=" language === 'ko' ">
          다뤄진 매체들
        </span>
        <span v-else-if=" language === 'es' ">
          PRESENTADO EN
        </span>
        <span v-else>
          FEATURED IN
        </span>
      </h2>
    </div>
    <div class="content-container content-container--medium media-mentions__img-container">


      <a href="http://matryx.fyi/d3mf8" class="press-logo" target="_blank">
        <img src="../../assets/images/press/cointelegraph.png" alt="CoinTelegraph" class="cointelegraph-logo">
      </a>
      <a class="press-logo" href="http://matryx.fyi/wt4sz" target="_blank">
        <img src="../../assets/images/press/tokenmarket.png"
          alt="Token Market" class="token-market-logo">
      </a>
      <a class="press-logo" href="http://matryx.fyi/2khb0" target="_blank">
        <img src="../../assets/images/press/gizmodo.png" alt="Gizmodo">
      </a>
      <a class="press-logo" href="http://matryx.fyi/qu9j5" target="_blank">
        <img src="../../assets/images/press/business-insider.png" alt="Business Insider">
      </a>
      <a class="press-logo" href="http://matryx.fyi/5zss6" target="_blank">
        <img src="../../assets/images/press/sdut-logo.png" alt="SDUT">
      </a>

      <a class="press-logo" href="http://matryx.fyi/l9pgu" target="_blank">
        <img src="../../assets/images/press/UCSD-logo.png" alt="UCSD">
      </a>
      <a class="press-logo" href="http://matryx.fyi/3260b" target="_blank">
        <img src="../../assets/images/press/sd_times.png" alt="SD Times">
      </a>
      <a class="press-logo" href="http://matryx.fyi/eqc3k" target="_blank">
        <img src="../../assets/images/press/singularity.png" alt="Singularity">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MediaMentions',

  computed: {
    language () {
      return this.$store.state.language
    }
  }
}
</script>

<style lang="scss">
.media-mentions {
  display:-webkit-box;display:-ms-flexbox;display:flex;
  flex-direction: column;

  h2{
    font-size: 40px;
    display: block;
    padding-top: 50px;
  }

  p{
    text-align: center;
    text-transform: uppercase;
    width: 100%;
    font-size: 24px;
  }
  a{
    opacity: 0.2;
    padding: 25px;
  }
  a:hover{
    opacity: 1;
    transition: all 0.3s;
  }
  .content-container--large{
    padding-bottom: 0px;
  }

  .content-container--medium{
    padding-top: 20px;
    padding-bottom: 10px;
  }

  &__img-container {
    display:-webkit-box;display:-ms-flexbox;display:flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    img {
      max-width: 200px;
      padding: 10px;
    }

    .token-market-logo {
      padding: 40px;
    }

    .cointelegraph-logo {
      padding: 25px;
    }
  }
}

@media screen and (max-width: 500px) {
  .media-mentions__img-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
}
</style>
