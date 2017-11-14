<template lang="html">
  <section class="content-container content-container--large ">
    <div class="MatryxLogo content-container">
      <img src="../../assets/images/Matryx_Black_Full_Logo.png" alt="">
    </div>
    <h2 class="text--center text-color--matryx-darker-grey">
      <span v-if=" language === 'ru' " style="font-size: 32px;">
        Matryx — платформа для децентрализованного сотрудничества
      </span>
    	<span v-else-if=" language === 'ch' ">Matryx：分散化合作平台</span>
    	<span v-else-if=" language === 'ge' ">
        Matryx: Die Plattform für dezentrale Zusammenarbeit
      </span>
    	<span v-else-if=" language === 'ja' ">
        Matryx：分散型コラボレーションのプラットフォーム
      </span>
    	<span v-else-if=" language === 'ko' ">Matryx: 분산화 협업을 위한 플랫폼</span>
      <span v-else-if=" language === 'es' ">La platforma colaborativa de investigación y desarrollo</span>
    	<span v-else>The Collaborative Research &#38; Development Engine </span>
    </h2>
    <h3 class="text--center text-color--matryx-dark-grey">
      <span v-if=" language === 'ru' ">Оптимизирован для виртуальных интерфейсов</span>
      <span v-else-if=" language === 'ch' ">为虚拟现实界面优化</span>
      <span v-else-if=" language === 'ge' ">Optimiert für Virtual Reality Interfaces</span>
      <span v-else-if=" language === 'ja' ">バーチャルリアリティインターフェイスに最適化</span>
      <span v-else-if=" language === 'ko' ">가상 현실 인터페이스에 최적화 됨</span>
      <span v-else-if=" language === 'es' ">Optimizado para interfaces de realidad virtual</span>
      <span v-else>Optimized for Virtual Reality Interfaces</span>
    </h3>
    <!-- <p class="text-color--matryx-dark-grey">
      <span v-if=" language === 'ru' ">
        Matryx — это платформа децентрализованного сотрудничества. Matryx состоит из системы вознаграждений, библиотеки цифровых активов и торговой площадки. Публикация сведений о проблемах осуществляется вместе с назначением вознаграждения за проверенное решение. Пользователи затем работают совместно над решением проблем, делятся результатами и получают вознаграждение. Вознаграждения выдаются всем соответствующим соавторам, и все материалы добавляются в библиотеку Matryx и на торговую площадку для дальнейшей покупки. Это приводит к возникновению экосистемы общественного сотрудничества и создания идей, которая будет стимулировать исследования и инноваций.
      </span>
    	<span v-else-if=" language === 'ch' ">
        Matryx 是一个分散化合作平台。Matryx 由赏金制度、数字资产图书馆和市场组成。问题以及赏金发布后，用户相互协作来解决问题、分享成果、并获得奖励。奖励被赋予所有相关的贡献者，所有意见书均被添加到 Matryx 图书馆和市场，以供将来购买。这将创造出公共协作和创意的生态系统，进而推动研究和创新。
      </span>
    	<span v-else-if=" language === 'ge' ">
        Matryx ist eine Plattform für dezentrale Zusammenarbeit. Matryx besteht aus einem Bounty-System, einer Bibliothek mit digitalen Assets und einem Marktplatz. Probleme werden zusammen mit der Belohnung gepostet, die für eine verifizierte Lösung ausgeschrieben ist. Nutzer arbeiten dann zusammen, um Probleme zu lösen, ihre Ergebnisse zu teilen und Belohnungen zu verdienen. Alle maßgeblichen Mitwirkenden erhalten Belohnungen und alle Beiträge werden der Matryx-Bibliothek und dem Marktplatz hinzugefügt, von wo sie später erworben werden können. Hierdurch entsteht ein Ökosystem aus öffentlicher Zusammenarbeit und Ideen, das Forschung und Innovation vorantreiben wird.
      </span>
    	<span v-else-if=" language === 'ja' ">
        Matryxは分散型コラボレーションのプラットフォームです。Matryxは、報奨システム、デジタル資産のライブラリ、マーケットプレイスから構成されています。問題は、検証されたソリューションに対する報奨と共に、掲示されます。ユーザーは、問題を解決し、結果を共有し、報奨を得るために協力します。報奨は関連する貢献者全員に与えられ、すべての提出物は将来の購入のためにMatryxライブラリおよびマーケットプレイスに追加されます。これにより、研究とイノベーションを促進する公共コラボレーションとアイデアのエコシステムが生まれます。
      </span>
    	<span v-else-if=" language === 'ko' ">
        Matryx는 분산화 협업을 위한 플랫폼입니다. Matryx는 포상 제도, 디지털 자산 라이브러리, 거래소 등으로 구성되어 있습니다. 인증된 해결책에 대한 포상금과 함께 문제가 게시됩니다. 그 후 이용자들은 문제를 해결하고 그 결과를 공유하고 보상을 획득하기 위해 협업합니다. 보상은 관련된 모든 기여자들에게 주어집니다. 제출된 모든 내용은 Matryx 라이브러리에 추가되며 동시에 추후에 구매가 가능하도록 거래소에 추가됩니다. 이로써 개방적인 환경에서의 협업은 물론 연구와 혁신을 돕는 아이디어들로 구성된 하나의 생태계가 만들어지게 됩니다.
      </span>
    	<span v-else>
        Matryx is a platform for decentralized collaboration. Matryx consists of a bounty system, a library of digital assets, and a marketplace. Problems are posted, along with a bounty for a verified solution. Users then collaborate to solve problems, share results, and earn rewards. Rewards are given to all relevant contributors, and all submissions are added to the Matryx library and marketplace for future purchase. This will create an ecosystem of public collaboration and ideas that will drive research and innovation.
      </span>
    </p> -->
  </section>
</template>

<script>
export default {
  name: 'AboutMatryx',
  computed: {
    language () {
      return this.$store.state.language
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/colors.scss';

.MatryxLogo{
  margin: 0 auto;
  text-align: center;
}

.MatryxLogo img{
  max-width: 400px;
}

.content-container{
  padding: 20px 40px;
}

section.content-container {
  /*border-top: 1px solid $matryx-grey;
  border-bottom: 1px solid $matryx-grey;*/
  padding: 0px 80px 20px 80px;
  h1{
    font-size: 46px;
    margin-bottom: 20px;
  }
  h2{
    font-weight: 700px;
    font-size: 32px;
  }
  h3{
    padding:5px;
  }
  p{
    padding: 25px;
    font-size: 18px;
  }
}

@media screen and (max-width: 850px) {
  .MatryxLogo img{
    max-width: 250px;
    padding: 0px;
  }
  .content-container{
    margin: 0 auto;
    padding-bottom: 15px;
  }

  section.above-the-fold > .content-container {
    padding-top: 150px;
  }
  section.content-container {
    padding: 10px;
  }
  h1 {
    font-size: 25px;
  }
  h3{
    font-size: 24px;
    line-height: 30px;
  }
}
</style>
