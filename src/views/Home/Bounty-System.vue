<template>
  <section class="bkg--blue-gradient" id="bounty-system">
    <div class="content-container content-container--large text-color--white">
      <h2 class="title content-container--medium">
        <span v-if=" language === 'ru' ">Стимулирование инноваций посредством конкурса в духе сотрудничества</span>
      	<span v-else-if=" language === 'ch' ">通过合作竞争激励创新</span>
      	<span v-else-if=" language === 'ge' ">Innovationsanreize durch kollaborativen Wettbewerb</span>
      	<span v-else-if=" language === 'ja' ">コラボレーションによる競争を通じてイノベーションを奨励</span>
      	<span v-else-if=" language === 'ko' ">협업적 경쟁을 통한 보상형 혁신</span>
      	<span v-else>Incentivized Innovation Through Collaborative Competition</span>
      </h2>
      <p class="content-container--medium">
        <span v-if=" language === 'ru' ">Система вознаграждений Matryx призвана ускорить процесс инноваций и вознаградить всех пользователей, которые вносят свой вклад. Вознаграждение — это просто задача, опубликованная на платформе со справедливым вознаграждением MTX для пользователей, которые вносят вклад в ответ. Любой пользователь может разместить вознаграждение для сообщества Matryx и принять участие в решении задачи.</span>
				<span v-else-if=" language === 'ch' ">Matryx 奖励金制度旨在加速创新并奖励所有作出贡献的用户。奖励金只是一个被发布到平台的挑战，对促成答案的用户给予公平的 MTX 奖励。任何用户均可发布奖励金到 Matryx 社区，任何用户均可参与。</span>
				<span v-else-if=" language === 'ge' ">Ziel des Bounty-Systems von Matryx ist es, Innovation zu beschleunigen und alle mitwirkenden Nutzer zu belohnen. Eine Belohnung ist schlichtweg eine auf der Plattform gepostete Aufgabe mitsamt einer fairen MTX-Vergütung für Nutzer, die zur Lösung beitragen. Jeder Nutzer kann Belohnungen in der Matryx-Community posten und jeder Nutzer kann teilnehmen.</span>
				<span v-else-if=" language === 'ja' ">Matryxの報奨システムは、イノベーションを加速し、貢献するすべてのユーザーに報酬を与えることを目指しています。報奨金は、答えに貢献するユーザーに対し、公平なMTX報酬でプラットフォームに掲示された挑戦でしかありません。どのユーザーもMatryxコミュニティに報奨金を掲示でき、どのユーザーでも参加できます。</span>
				<span v-else-if=" language === 'ko' ">Matryx 포상 제도는 더 빠른 혁신은 물론 기여한 모든 이용자들에게 보상해주는 것을 목적으로 하고 있습니다. 포상금이란 간단히 말해서 해결책에 기여를 한 이용자들을 위한 적절한 액수의 MTX 보상과 함께 플랫폼 상에서 게시된 챌린지를 지칭합니다. 이용자 중 누구라도 Matryx 커뮤니티에서 포상금을 게시할 수 있으며 이용자 중 누구라도 참여할 수 있습니다.</span>
				<span v-else>The Matryx Bounty system aims to accelerate innovation and reward all users who contribute.
        A bounty is simply a challenge posted to the platform with a fair MTX reward for users who contribute
        to the answer. Any user can post bounties to the Matryx community and any user can participate.</span>
      </p>
      <div class="bounty">
        <div class="bounty__explanation">
          <h4 class=""><span v-if=" language === 'ru' ">Как это работает</span>
    				<span v-else-if=" language === 'ch' ">如何运作</span>
    				<span v-else-if=" language === 'ge' ">So funktioniert's</span>
    				<span v-else-if=" language === 'ja' ">プロセス</span>
    				<span v-else-if=" language === 'ko' ">이용방법</span>
    				<span v-else>How it Works</span>
          </h4>
          <div class="bounty__explanation__card">
            <div class="bounty__explanation__card__item">
              <span>1</span>
              <h4>
                <span v-if=" language === 'ru' ">Опубликовано вознаграждение</span>
        				<span v-else-if=" language === 'ch' ">发布奖励金</span>
        				<span v-else-if=" language === 'ge' ">Belohnung wird gepostet</span>
        				<span v-else-if=" language === 'ja' ">報奨金が掲示される</span>
        				<span v-else-if=" language === 'ko' ">포상금이 게시됩니다</span>
        				<span v-else>Bounty is Posted</span>
              </h4>
              <p>
                <span v-if=" language === 'ru' ">Маршалл запрашивает 3D-модель космического корабля и размещает вознаграждение</span>
        				<span v-else-if=" language === 'ch' ">马歇尔请求 3D 宇宙飞船模型并发布奖励金</span>
        				<span v-else-if=" language === 'ge' ">Marshall stellt eine Anfrage für ein 3D-Raumschiffmodell und postet eine Belohnung</span>
        				<span v-else-if=" language === 'ja' ">Marshallが3Dの宇宙探査機モデルを要求し、報奨金を掲示する</span>
        				<span v-else-if=" language === 'ko' ">Marshall이 3D 우주선 모델링을 요청하면서 포상금을 게시합니다</span>
        				<span v-else>Marshall requests a 3D Spacecraft model &#38; posts a bounty</span>
              </p>
            </div>
            <div class="bounty__explanation__card__item">
              <span>2</span>
              <h4>
                <span v-if=" language === 'ru' ">Представлены модели</span>
        				<span v-else-if=" language === 'ch' ">提交设计</span>
        				<span v-else-if=" language === 'ge' ">Entwürfe werden eingereicht</span>
        				<span v-else-if=" language === 'ja' ">デザインが提出される</span>
        				<span v-else-if=" language === 'ko' ">디자인이 제출됩니다</span>
        				<span v-else>Designs Submitted</span>
              </h4>
              <p>
                <span v-if=" language === 'ru' ">Два пользователя представили свои лучшие модели космического корабля. Маршаллу нравится дизайн, и он запрашивает раунд пересмотра у сообщества.</span>
        				<span v-else-if=" language === 'ch' ">两位用户提交他们最好的宇宙飞船模型。马歇尔喜欢某个设计，请求社区进行一轮修正。</span>
        				<span v-else-if=" language === 'ge' ">Zwei Nutzer reichen ihre besten Raumschiffmodelle ein. Marshall gefällt einer der Entwürfe und er bittet die Community um eine Überarbeitungsrunde.</span>
        				<span v-else-if=" language === 'ja' ">2人のユーザーが自己最高の宇宙探査機モデルを提出する。Marshallはその中の1つのデザインが気に入り、コミュニティからの改訂を要請する。</span>
        				<span v-else-if=" language === 'ko' ">2명의 이용자들이 최선을 다한 자신의 우주선 모델링 결과물을 제출합니다. Marshal은 그 중 하나가 마음에 들어 커뮤니티에 1회의 수정을 요청합니다.</span>
        				<span v-else>Two users submit their best Spacecraft models.
                Marshall likes a design and requests a round of revision from the community.</span>
              </p>
            </div>
            <div class="bounty__explanation__card__item">
              <span>3</span>
              <h4>
                <span v-if=" language === 'ru' ">Выбран победитель</span>
        				<span v-else-if=" language === 'ch' ">选择获胜者</span>
        				<span v-else-if=" language === 'ge' ">Sieger wird ausgewählt</span>
        				<span v-else-if=" language === 'ja' ">勝者が選ばれる</span>
        				<span v-else-if=" language === 'ko' ">우승자가 선정됩니다</span>
        				<span v-else>Winner is Chosen</span>
              </h4>
              <p>
                <span v-if=" language === 'ru' ">Два новых пользователя берут предпочтительные дизайны Маршалла и выполняют их «ремикс». Маршалл выбирает победителя и смарт-контракт распределяет MTX среди всех соавторов.</span>
        				<span v-else-if=" language === 'ch' ">两位新用户采用马歇尔最喜爱的设计并进行“重新混合”。马歇尔选择一个获胜者，同时智能合同将 MTX 分配给所有贡献者。</span>
        				<span v-else-if=" language === 'ge' ">Zwei neue Nutzer greifen Marshalls favorisierten Entwurf auf und erstellen daraus jeweils einen „Remix”. Marshall wählt einen Sieger aus und ein Smart Contract verteilt MTX an alle Mitwirkenden.</span>
        				<span v-else-if=" language === 'ja' ">2人の新しいユーザーがMarshallが気に入ったデザインを使い、それをリミックスする。マーシャルは勝者を選び、スマートコントラクトがMTXをすべての寄稿者に配布する。</span>
        				<span v-else-if=" language === 'ko' ">2명의 새로운 이용자들이 Marshall의 마음에 드는 디자인을 가지고 재변형 작업을 합니다. Marshall은 우승자를 선정하고 스마트 계약은 MTX를 모든 기여자들에게 배분합니다.</span>
        				<span v-else>Two new users take Marshall's favorite designs and 'remix' it. Marshall chooses a winner and a smart contract distributes MTX to all contributors.</span>
              </p>
            </div>
          </div>
        </div>
        <div class="bounty__diagram">
          <h4>
            <span v-if=" language === 'ru' ">Начинается конкурс</span>
    				<span v-else-if=" language === 'ch' ">比赛开始</span>
    				<span v-else-if=" language === 'ge' ">Wettbewerb beginnt</span>
    				<span v-else-if=" language === 'ja' ">競争開始</span>
    				<span v-else-if=" language === 'ko' ">경쟁전이 시작됩니다</span>
    				<span v-else>COMPETITION STARTS</span>
          </h4>
          <caption class="text-color--white ">
            <span v-if=" language === 'ru' ">Постройка космического корабля</span>
    				<span v-else-if=" language === 'ch' ">建造一艘宇宙飞船</span>
    				<span v-else-if=" language === 'ge' ">Bau eines Raumschiffs</span>
    				<span v-else-if=" language === 'ja' ">宇宙探査機の作成</span>
    				<span v-else-if=" language === 'ko' ">우주선을 만드세요</span>
    				<span v-else>BOUNTY: DESIGN A SPACECRAFT</span>
          </caption>
          <img src="../../assets/images/bounty-drawing.svg" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BountySystem',
  computed: {
    language () {
      return this.$store.state.language
    }
  }
}
</script>

<style lang="scss" scoped>
#bounty-system {
  padding: 20px 0 ;
}

h2, h5, p, caption {
  opacity: 0.8;
}

.title {
  margin-bottom: 20px;
  max-width: 550px;
  font-size: 28px;
  line-height: 40px;
}

.bkg--blue-gradient {
  background-color: #0F3249;
  // background-image: url('../../assets/images/backgrounds/bluegradient.svg');
  background-size:cover;
  background-repeat: no-repeat;
  background-position:bottom;
}

p.content-container--medium {
  max-width: 750px;
  font-size: 18px;
}

.bounty {
  display:-webkit-box;display:-ms-flexbox;display:flex;
  justify-content: space-between;
  margin: 40px 0;

 &__diagram {
    flex: 1 1 auto;
    padding-top: 30px;

   h4, caption {
      width: 100%;
      text-align:center;
      font-size: 20px;
    }
    caption{
      display: block;
      padding-top: 0;
      margin-bottom: 20px;
      font-size: 14px;
    }
    img {
      width: 100%;
    }
  }

 &__explanation{
    padding-top: 20px;
    width: 50%;
    max-width: 400px;
    margin-right: 80px;
    position:relative;

   & > h4 {
      opacity: 0.8;
      font-size:22px;
      margin-bottom: 20px;
    }

   &__card {
      border: 1px solid rgba(255,255, 255,0.3);
      padding: 20px;

     &__item {
        & > span {
          display:inline-block;
          vertical-align: top;
          font-size: 16px;
        }
        h4 {
          display: inline-block;
          width: calc(100% - 70px);
          margin-left: 20px;

         &::after {
            content: '';
            clear: both;
          }

         span {
            font-size: 16px;
            display:block;
            opacity: 0.8;
          }
        }
        p {
            width: calc(100% - 70px);
            margin-left: 30px;
            font-size: 16px;
            display:block;
            opacity: 0.8;
         }
      }
    }
  }
}


/*----- MEDIA QUERIES -----*/
@media screen and (max-width: 900px) {
  .content-container {
    padding-bottom: 0;
  }
  .bounty {
    flex-direction: column;

   & > * {
      width: 100%;
      max-width: 100%;
    }

   &__explanation__card {
      margin-bottom: 40px;
    }
    &__diagram img {
      max-width: 500px;
      margin: 0 auto;
      display: block;
    }
  }
}

</style>
