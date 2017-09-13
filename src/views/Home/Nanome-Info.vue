<template>
  <section>
    <div class="content-container content-container--large nanome">
      <div class="nanome__info">
        <h2 class="nanome__info__title">
          <span v-if=" language === 'ru' ">Создано командой в Matryx</span>
        	<span v-else-if=" language === 'ch' ">由 Matryx团队构建</span>
        	<span v-else-if=" language === 'ge' ">Erstellt vom Matryx-Team</span>
        	<span v-else-if=" language === 'ja' ">Matryxのチームによる構築</span>
        	<span v-else-if=" language === 'ko' ">Matryx의 팀에 의해 제작</span>
        	<span v-else>Built by the Team at Matryx</span>
        </h2>
        <div class="nanome__info__text text-color--matryx-dark-grey">
          <span v-if=" language === 'ru' ">Matryx создает интеллектуальные интерфейсы виртуальной реальности, которые позволяют ученым и инженерам совместно работать, проектировать и моделировать с точностью до наноразмеров. Наша программа помогает продвигать исследования и разработки в биологических науках, материаловедении и наноинженерии путем интеграции практического интерфейса виртуальной реальности с облачными вычислениями.</span>
        	<span v-else-if=" language === 'ch' ">Matryx 构建智能虚拟现实界面，使科学家和工程师能够在纳米级精度下进行合作、设计和模拟。我们的软件利用云计算来整合身临其境的虚拟现实界面，进而帮助推动生命科学、材料科学和纳米工程的研究和发展。</span>
        	<span v-else-if=" language === 'ge' ">Matryx erstellt intelligente Virtual-Reality-Interfaces, die Wissenschaftlern und Ingenieuren eine Zusammenarbeit, Konzeption und Simulation mit Präzision im Nanomaßstab ermöglichen. Unsere Software fördert den Fortschritt von Forschung und Entwicklung in Biowissenschaften, Materialwissenschaften und Nanotechnik durch die Kombination eines interaktiven Virtual-Reality-Interfaces mit Cloud Computing.</span>
        	<span v-else-if=" language === 'ja' ">Matryxはインテリジェントなバーチャルリアリティインターフェイスを構築し、科学者とエンジニアがナノスケールの精度で協力、設計、シミュレーションを行うことを可能にしています。当社のソフトウェアは、実践的なバーチャルリアリティインターフェースとクラウドコンピューティングを統合することにより、ライフサイエンス、材料科学、ナノエンジニアリングの研究開発を進める上で役立ちます。</span>
        	<span v-else-if=" language === 'ko' ">Matryx은 과학자들과 엔지니어들이 나노 수준의 정밀도로 협력 및 디자인하고 시뮬레이션을 할 수 있도록 해주는 지능형 가상현실 인터페이스를 제작하고 있습니다. 저희 소프트웨어는 직접 조작하는 가상현실 인터페이스와 클라우드 컴퓨팅의 통합을 통해 생명과학, 재료과학, 나노엔지니어링 분야에서의 연구와 개발을 지원하고 있습니다.</span>
        	<span v-else>
            The Matryx team builds intelligent virtual reality interfaces that enable scientists and engineers to collaborate, design and simulate with nanoscale precision. Our software helps advance research and development in life sciences, materials sciences, and nanoengineering by integrating a hands-on virtual reality interface with cloud computing.
          </span>
        </div>
      </div>
      <div class="nanome__logos">
        <h3 class="text-color--matryx-grey text-align-center">
          <span v-if=" language === 'ru' ">Наши текущие продукты</span>
        	<span v-else-if=" language === 'ch' ">我们目前的产品</span>
        	<span v-else-if=" language === 'ge' ">Unsere aktuellen Produkte</span>
        	<span v-else-if=" language === 'ja' ">当社の現在の製品</span>
        	<span v-else-if=" language === 'ko' ">저희 현재 제품들</span>
        	<span v-else>OUR CURRENT PRODUCTS</span>
        </h3>
        <p>
          <span v-if=" language === 'ru' ">Доступно на <a href="http://store.steampowered.com/app/493430/nanoone/" target="_blank">Steam</a> и <a href="http://calcflow.io/" target="_blank">Oculus</a></span>
        	<span v-else-if=" language === 'ch' ">已登陆 <a href="http://store.steampowered.com/app/493430/nanoone/" target="_blank">Steam</a> 和 <a href="http://calcflow.io/" target="_blank">Oculus</a> 平台</span>
        	<span v-else-if=" language === 'ge' ">Verfügbar auf <a href="http://store.steampowered.com/app/493430/nanoone/" target="_blank">Steam</a> und <a href="http://calcflow.io/" target="_blank">Oculus</a></span>
        	<span v-else-if=" language === 'ja' ">スチーム (<a href="http://store.steampowered.com/app/493430/nanoone/" target="_blank">Steam</a>) とオクラルス (<a href="http://calcflow.io/" target="_blank">Oculus</a>) で利用可能</span>
        	<span v-else-if=" language === 'ko' "><a href="http://store.steampowered.com/app/493430/nanoone/" target="_blank">Steam</a> 및 <a href="http://calcflow.io/" target="_blank">Oculus에서</a> 이용가능</span>
        	<span v-else>Available on <a href="http://store.steampowered.com/app/493430/nanoone/" target="_blank">Steam</a> and <a href="http://calcflow.io/" target="_blank">Oculus</a></span>
        </p>
        <div class="nanone__logos__calcflow logo">
          <img src="../../assets/images/nanometeam.png" alt="team">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NanomeInfo',
  computed: {
    language () {
      return this.$store.state.language
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/colors';

.nanome {
  display: flex;
  justify-content: center;
  color: #4A4A4A ;
  flex-direction: row;
  border-bottom: 1px solid $light-purple-border;
  padding-bottom: 40px;
}

.nanome__info {
  padding: 20px 40px 0 0;
  max-width: 600px;

 &__title {
    font-size: 38px;
    line-height: 46px;
  }

 &__text {
    margin-top: 30px;
    font-size: 18px;
    line-height: 30px;
    max-width: 900px;
    width: 100%;
  }
}
.nanome__logos{
    padding-top: 20px;
    width: 100%;
    text-align: center;

   h3 {
      padding-top: 20px;
    }
  }

.logo {
  margin-bottom: 20px;
  text-align: left;
  display: inline-block;
  max-width: calc(50%-10px);
  width: 100%;
  text-align: center;
}


.logo > img {
  max-height: 300px;
}

/*----- MEDIA QUERIES -----*/
@media screen and (max-width: 850px) {
  .nanome {
    flex-wrap: wrap;
  }
  .nanome__info {
    padding: 20px 0;
    &__text {
      max-width: 100%;
    }
  }
  .nanome__logos {
    margin-top: 50px;

   h3{
      margin-bottom: 40px;
    }
  }
}
@media screen and (max-width: 500px) {
  .logo {
    img {
      max-height: 150px;
    }
  }
}
</style>
