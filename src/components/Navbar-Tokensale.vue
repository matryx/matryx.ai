<template>
  <section>
    <div class="token-bar content-container content-container--large">
      <div class="token-bar__scroll">
        <div class="token-bar__section first">
          <!-- GIVE TEXT A TEXT SHADOW -->
          <img src="../assets/icons/icon-lightning.png" alt="">
          <p class="text-color--white">
            <span v-if=" language === 'ru' ">Предпродажа</span>
    				<span v-else-if=" language === 'ch' ">预售</span>
    				<span v-else-if=" language === 'ge' ">Vorverkauf</span>
    				<span v-else-if=" language === 'ja' ">プリセール</span>
    				<span v-else-if=" language === 'ko' ">사전판매</span>
    				<span v-else>Pre-Sale</span>
          </p>
          <p class="text-color--matryx-lighter-blue">
            <span v-if=" language === 'ru' ">6 сентября 2017 года</span>
    				<span v-else-if=" language === 'ch' ">2017 年 9 月 6 日</span>
    				<span v-else-if=" language === 'ge' ">6. September 2017</span>
    				<span v-else-if=" language === 'ja' ">2017年9月6日</span>
    				<span v-else-if=" language === 'ko' ">2017년 9월 6일</span>
    				<span v-else>September 6, 2017</span>
          </p>
        </div>
        <div class="token-bar__section second">
          <img src="../assets/icons/icon-rocket.png" alt="">
          <p class="text-color--white">
            <span v-if=" language === 'ru' ">Запуск</span>
    				<span v-else-if=" language === 'ch' ">发行</span>
    				<span v-else-if=" language === 'ge' ">Start</span>
    				<span v-else-if=" language === 'ja' ">ローンチ</span>
    				<span v-else-if=" language === 'ko' ">런칭</span>
    				<span v-else>Launch</span>
          </p>
          <p class="text-color--matryx-lighter-blue">
            <span v-if=" language === 'ru' ">13 сентября 2017 года</span>
    				<span v-else-if=" language === 'ch' ">2017 年 9 月 13 日</span>
    				<span v-else-if=" language === 'ge' ">13. September 2017</span>
    				<span v-else-if=" language === 'ja' ">2017年9月13日</span>
    				<span v-else-if=" language === 'ko' ">2017년 9월 13일</span>
    				<span v-else>September 13, 2017</span>
          </p>
        </div>
        <div class="token-bar__section third">
          <img src="../assets/icons/icon-matryx-token-blue.png" alt="">
          <p class="text-color--white">314,159,265</p>
          <p class="text-color--matryx-lighter-blue">
            <span v-if=" language === 'ru' ">Всего доступно MTX</span>
    				<span v-else-if=" language === 'ch' ">可提供的 MTX 总量</span>
    				<span v-else-if=" language === 'ge' ">Verfügbarer MTX-Gesamtbetrag</span>
    				<span v-else-if=" language === 'ja' ">入手可能なMTXの合計</span>
    				<span v-else-if=" language === 'ko' ">이용가능 MTX 총액</span>
    				<span v-else>Total MTX Available</span>
          </p>
        </div>
        <div class="token-bar__section fourth">
          <img src="../assets/icons/icon-eth-token-blue.png" alt="">
          <p class="text-color--white">161,803</p>
          <p class="text-color--matryx-lighter-blue">
            <span v-if=" language === 'ru' ">Предел ETH</span>
    				<span v-else-if=" language === 'ch' ">ETH 上限</span>
    				<span v-else-if=" language === 'ge' ">ETH-Limit</span>
    				<span v-else-if=" language === 'ja' ">ETHキャップ</span>
    				<span v-else-if=" language === 'ko' ">ETH 한도</span>
    				<span v-else>ETH Cap</span>
          </p>
        </div>
        <div class="token-bar__section fifth">
          <p>
            <span class="text-color--matryx-grey">
              <span v-if=" language === 'ru' ">60% будет продано | ПРОДАЖА СМАРТ-КОНТРАКТОВ ETH</span>
      				<span v-else-if=" language === 'ch' ">60% 待售 | ETH 智能销售联系人</span>
      				<span v-else-if=" language === 'ge' ">60 % stehen zum Verkauf | ETH-SMART-CONTRACT-VERKAUF</span>
      				<span v-else-if=" language === 'ja' ">60%が販売予定 | ETHスマートコントラクトセール</span>
      				<span v-else-if=" language === 'ko' ">60%의 판매할당 비율 | ETH 스마트 계약 판매</span>
      				<span v-else>60% To Be Sold | ETH Smart Contract Sale</span>
            </span>
            <br>
            <span class="text-color--white">
              <span v-if=" language === 'ru' ">Адрес Ethereum будет размещаться непосредственно на matryx.ai</span>
      				<span v-else-if=" language === 'ch' ">以太坊地址只会直接发布在 matryx.ai</span>
      				<span v-else-if=" language === 'ge' ">Die Ethereum-Adresse wird nur direkt auf matryx.ai gepostet</span>
      				<span v-else-if=" language === 'ja' ">イーサリアム (Ethereum) のアドレスはmatryx.aiにのみ直接掲示されます</span>
      				<span v-else-if=" language === 'ko' ">이더리움 주소는 matrix.ai에서만 직접 게시됩니다</span>
      				<span v-else>Address will ONLY be posted on matryx.ai</span>
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'NavbarToken',
  computed: {
    language () {
      return this.$store.state.language
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/colors';

section{
  margin: 0;
  padding: 0;
  background: rgb(8,31,54);
  background: -moz-linear-gradient(-45deg, rgba(8,31,54,1) 0%, rgba(0,134,203,1) 100%);
  background: -webkit-linear-gradient(-45deg, rgba(8,31,54,1) 0%,rgba(0,134,203,1) 100%);
  background: linear-gradient(135deg, rgba(8,31,54,1) 0%,rgba(0,134,203,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#081f36', endColorstr='#0086cb',GradientType=1 );
}

.content-container {
  padding: 0;
}

.token-bar {
  height: 50px;
  overflow: hidden;
  position: relative;
}

.token-bar__scroll  {
  display:flex;
  justify-content: space-between;
  width: 1200px;
  height: 100%;
  margin: 0;
  line-height: 50px;
  text-align: center;
}

.token-bar__section {
  display:inline-block;
  position:relative;
  width:20%;
  padding: 0;
  margin: 0;

  img, p {
    display:inline-block;
    height:30px;
  }

  p, & > span{
    font-size: 12px;
    white-space: nowrap;
    margin-bottom:0;
  }
  p:first-child {
    margin-right: 5px;
  }

}


.first {
  left: 100%;
  animation: scroll-first 30s linear -30s infinite;
}
.second {
  left: 80%;
  animation: scroll-second 30s linear -24s infinite;
}

.third {
  left: 60%;
  animation: scroll-third 30s linear -18s infinite;
}

.fourth {
  left: 40%;
  animation: scroll-fourth 30s linear -12s infinite;
}

.fifth {
  left: 20%;
  animation: scroll-fifth 30s linear -6s infinite;

  p{ line-height:24px; }
}

@keyframes scroll-first {
  0% { left:100%; }
  16.7% { left: 80%; }
  33.3% { left: 60%; }
  50% { left: 40%; }
  66.7% { left: 20%; }
  83.3% { left: 0%; }
  100% { left: -20%; }
}

@keyframes scroll-second {
  0% { left: 80%; }
  16.7% { left: 60%; }
  33.3% { left: 40%; }
  50% { left: 20%; }
  66.7% { left: 0%; }
  83.3% { left: -20%; }
  100% { left: -40%; }
}

@keyframes scroll-third {
  0% { left: 60%; }
  16.7% { left: 40%; }
  33.3% { left: 20%; }
  50% { left: 0%; }
  66.7% { left: -20%; }
  83.3% { left: -40%; }
  100% { left: -60%; }
}

@keyframes scroll-fourth {
  0% { left: 40%; }
  16.7% { left: 20%; }
  33.3% { left: 0%; }
  50% { left: -20%; }
  66.7% { left: -40%; }
  83.3% { left: -60%; }
  100% { left: -80%; }
}

@keyframes scroll-fifth {
  0% { left: 20%; }
  16.7% { left: 0%; }
  33.3% { left: -20%; }
  50% { left: -40%; }
  66.7% { left: -60%; }
  83.3% { left: -80%; }
  100% { left: -100%; }
}

</style>
