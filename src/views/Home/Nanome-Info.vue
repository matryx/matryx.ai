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
          <span v-else-if=" language === 'es' ">Construido por Nanome, el equipo de tras de Calcflow and nano-one</span>
        	<span v-else>Built by Nanome, the team behind Calcflow and nano-one</span>
        </h2>
        <div class="nanome__info__text text-color--matryx-dark-grey">
          <span v-if=" language === 'ru' ">Matryx создает интеллектуальные интерфейсы виртуальной реальности, которые позволяют ученым и инженерам совместно работать, проектировать и моделировать с точностью до наноразмеров. Наша программа помогает продвигать исследования и разработки в биологических науках, материаловедении и наноинженерии путем интеграции практического интерфейса виртуальной реальности с облачными вычислениями.</span>
        	<span v-else-if=" language === 'ch' ">Matryx 构建智能虚拟现实界面，使科学家和工程师能够在纳米级精度下进行合作、设计和模拟。我们的软件利用云计算来整合身临其境的虚拟现实界面，进而帮助推动生命科学、材料科学和纳米工程的研究和发展。</span>
        	<span v-else-if=" language === 'ge' ">Matryx erstellt intelligente Virtual-Reality-Interfaces, die Wissenschaftlern und Ingenieuren eine Zusammenarbeit, Konzeption und Simulation mit Präzision im Nanomaßstab ermöglichen. Unsere Software fördert den Fortschritt von Forschung und Entwicklung in Biowissenschaften, Materialwissenschaften und Nanotechnik durch die Kombination eines interaktiven Virtual-Reality-Interfaces mit Cloud Computing.</span>
        	<span v-else-if=" language === 'ja' ">Matryxはインテリジェントなバーチャルリアリティインターフェイスを構築し、科学者とエンジニアがナノスケールの精度で協力、設計、シミュレーションを行うことを可能にしています。当社のソフトウェアは、実践的なバーチャルリアリティインターフェースとクラウドコンピューティングを統合することにより、ライフサイエンス、材料科学、ナノエンジニアリングの研究開発を進める上で役立ちます。</span>
        	<span v-else-if=" language === 'ko' ">Matryx은 과학자들과 엔지니어들이 나노 수준의 정밀도로 협력 및 디자인하고 시뮬레이션을 할 수 있도록 해주는 지능형 가상현실 인터페이스를 제작하고 있습니다. 저희 소프트웨어는 직접 조작하는 가상현실 인터페이스와 클라우드 컴퓨팅의 통합을 통해 생명과학, 재료과학, 나노엔지니어링 분야에서의 연구와 개발을 지원하고 있습니다.</span>
          <span v-else-if=" language === 'es' ">El equipo de Nanome construye interfaces inteligentes de realidad virtual que permiten a los científicos e ingenieros colaborar, diseñar y simular con precisión a nanoescala.
            <br/><br/>Nuestro paquete de software ampliamente utilizado incluye código abierto <a href="http://calcflow.io/" target="_blank">Calcflow</a>, el conjunto de herramientas de matemáticas VR líder de la industria, y <a href="http://store.steampowered.com/app/493430/nanoone/" target="_blank">nano-one</a> una interfaz VR para el diseño y la simulación a nanoescala.</span>
          <span v-else>
            The Nanome team builds intelligent virtual reality interfaces that enable scientists and engineers to collaborate, design and simulate with nanoscale precision.
            <br/><br/>Our widely used software suite includes open source <a href="http://calcflow.io/" target="_blank">Calcflow</a>, the industry-leading VR mathematics toolkit, and <a href="http://store.steampowered.com/app/493430/nanoone/" target="_blank">nano-one</a>, una interfaz VR para el diseño y la simulación a nanoescala.
          </span>
        </div>
      </div>
      <div class="nanome__logos">
        <div class="token-sale__video-launcher content-container--medium">
          <iframe class="nanome-products-video-yt"
            width="480" height="270"
            :src="selectedLanguage" frameborder="0"
            allowfullscreen
          >
          </iframe>
        </div>
        <!-- <h3 class="text-color--matryx-grey text-align-center">
          <span v-if=" language === 'ru' ">Наши текущие продукты</span>
        	<span v-else-if=" language === 'ch' ">我们目前的产品</span>
        	<span v-else-if=" language === 'ge' ">Unsere aktuellen Produkte</span>
        	<span v-else-if=" language === 'ja' ">当社の現在の製品</span>
        	<span v-else-if=" language === 'ko' ">저희 현재 제품들</span>
        	<span v-else>OUR CURRENT PRODUCTS</span>
        </h3> -->

        <!-- ORIGINAL LOGOS -->
        <!-- <div class="nanone__logos__calcflow logo">
          <img src="../../assets/images/nanometeam.png" alt="team">
        </div>
        <p>
          <span v-if=" language === 'ru' ">Доступно на <a href="http://store.steampowered.com/app/493430/nanoone/" target="_blank">Steam</a> и <a href="http://calcflow.io/" target="_blank">Oculus</a></span>
        	<span v-else-if=" language === 'ch' ">已登陆 <a href="http://store.steampowered.com/app/493430/nanoone/" target="_blank">Steam</a> 和 <a href="http://calcflow.io/" target="_blank">Oculus</a> 平台</span>
        	<span v-else-if=" language === 'ge' ">Verfügbar auf <a href="http://store.steampowered.com/app/493430/nanoone/" target="_blank">Steam</a> und <a href="http://calcflow.io/" target="_blank">Oculus</a></span>
        	<span v-else-if=" language === 'ja' ">スチーム (<a href="http://store.steampowered.com/app/493430/nanoone/" target="_blank">Steam</a>) とオクラルス (<a href="http://calcflow.io/" target="_blank">Oculus</a>) で利用可能</span>
        	<span v-else-if=" language === 'ko' "><a href="http://store.steampowered.com/app/493430/nanoone/" target="_blank">Steam</a> 및 <a href="http://calcflow.io/" target="_blank">Oculus에서</a> 이용가능</span>
        	<span v-else>Available on <a href="http://store.steampowered.com/app/493430/nanoone/" target="_blank">Steam</a> and <a href="http://calcflow.io/" target="_blank">Oculus</a></span>
        </p> -->
      </div>
    </div>
    <div class="content-container--medium nanome-sub text-align-center">
      <h3 class="text--center text-color--matryx-dark-grey">
        <span v-if=" language === 'ru' ">Для продвижения человеческих знаний, научного сотрудничества и технологий, Nanome вводит
           Matryx: платформа совместной работы Blockchain для исследований на основе VR</span>
        <span v-else-if=" language === 'ch' ">为了推进人类知识、科研合作和技术，Nanome推出Matryx平台：一个基于区块链技术的虚拟现实研究平台</span>
        <span v-else-if=" language === 'ge' ">Um menschliches Wissen, wissenschaftliche Kooperationen und Technologie voranzutreiben, stellt Nanome
           Matryx: Eine Blockchain-basierte Kollaborationsplattform für die VR-basierte Forschung</span>
        <span v-else-if=" language === 'ko' ">Nanome은 인간 지식, 연구 협력 및 기술을 발전시키기 위해 블록 체인 기술을 기반으로하는 가상 현실 연구 플랫폼 인 Matryx 플랫폼을 발표했습니다.</span>
        <span v-else-if=" language === 'ja' ">人間の知識、科学技術協力、技術を進歩させるために、Matryx：VRをベースとした研究のためのブロックチェインを利用したコラボレーションプラットフォーム</span>
        <span v-else-if=" language === 'es' ">Para avanzar en el conocimiento humano, las cooperaciones científicas y la tecnología, Nanome presenta Matryx: una plataforma de colaboración impulsada por Blockchain para la investigación basada en realidad virtual</span>
        <span v-else>To advance human knowledge, scientific cooperations and technology, Nanome introduces
          Matryx: A Blockchain powered collaboration platform for VR based research</span>
      </h3>

      <!-- <h3 class="text-color--matryx-dark-grey">To advance human knowledge, scientific cooperations and technology, Nanome introduces
        Matryx: A Blockchain powered collaboration platform for VR based research</span>
      </h3> -->
    </div>
  </section>
</template>

<script>
import Video from '../../assets/media/giphy.mp4'

export default {
  name: 'NanomeInfo',
  computed: {
    language () {
      return this.$store.state.language
    },
    selectedLanguage () {
      return this.language === 'ch' ? this.VideoLinks.Chinese : this.VideoLinks.English
    }
  },
  data () {
    return {
      Video,
      VideoLinks: {
        English: 'https://giphy.com/embed/xT9Igs9rNVbdsfbNmg',
        Chinese: 'https://giphy.com/embed/xT9Igs9rNVbdsfbNmg'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/colors';

.text-align-center{
  margin: 0 auto;
}

iframe{
  width: 560px !important;
  position: relative;
  z-index: 1;
  margin-left: 20px;
  /*min-width:500px !important;*/
}

.nanome {
  display: flex;
  justify-content: center;
  color: #4A4A4A ;
  flex-direction: row;
  padding-bottom: 40px;
  padding-top: 0px;;
}

.nanome-sub{
  padding-bottom: 50px;
}

.nanome__info {
  padding: 20px 0px 0 0;
  max-width: 800px;

 &__title {
    font-size: 30px;
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
    padding-top: 30px;
    width: 100%;
    text-align: center;

   h3 {
      padding-top: 20px;
    }
  }

.logo {
  margin-bottom: 40px;
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
@media screen and (max-width: 1000px) {
  .nanome {
    flex-wrap: wrap;
  }
  iframe{
    width: 380px !important;
    position: relative;
    z-index: 1;
    margin-left: -25px;
  }
  .nanome__info {
    padding: 20px 0;
    &__title {
       font-size: 28px;
     }
    &__text {
      max-width: 100%;
    }
  }
  .nanome__logos {
    margin-top: 30px;

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
