<template>
  <div class="media-mentions bkg-color--white">
    <div class=" content-container content-container--medium media-mentions__img-container">
      <p class="text-color--matryx-grey">
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
        <span v-else>
          Featured in
        </span>
      </p>
      <a class="press-logo" href="https://tokenmarket.net/blockchain/ethereum/assets/matryx/" target="_blank">
        <img src="../../assets/images/press/tokenmarket.png" alt="Token Market">
      </a>
      <a class="press-logo" href="https://www.gizmodo.com.au/2017/01/you-can-do-maths-in-virtual-reality-now/" target="_blank">
        <img src="../../assets/images/press/gizmodo.png" alt="Gizmodo">
      </a>
      <a class="press-logo" href="http://markets.businessinsider.com/news/stocks/Virtual-Reality-Software-Maker-Nanome-Introduces-Matryx-with-Token-Sale-1002282833?utm_source=matryx&utm_medium=web" target="_blank">
        <img src="../../assets/images/press/business-insider.png" alt="Business Insider">
      </a>
      <a class="press-logo" href="http://www.sandiegouniontribune.com/business/sd-fi-ignite-conference-20170223-story.html" target="_blank">
        <img src="../../assets/images/press/sdut-logo.png" alt="SDUT">
      </a>

      <a class="press-logo" href="http://jacobsschool.ucsd.edu/news/news_releases/release.sfe?id=2081" target="_blank">
        <img src="../../assets/images/press/UCSD-logo.png" alt="UCSD">
      </a>
      <a class="press-logo" href="http://sdtimes.com/nanome-launches-vr-collaboration-platform-matryx/" target="_blank">
        <img src="../../assets/images/press/sd_times.png" alt="SD Times">
      </a>
      <a class="press-logo" href="https://singularityhub.com/2017/01/18/get-ready-to-love-math-with-this-sweet-vr-calculator/" target="_blank">
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

  p{
    text-align: center;
    text-transform: uppercase;
    width: 100%;
  }
  a{
    opacity: 0.2;
    padding: 25px;
  }
  a:hover{
    opacity: 1;
    transition: all 0.3s;
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
