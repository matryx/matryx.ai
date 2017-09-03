<template>
  <section>
    <div class="content-container--large text--light content-container" id="what-is-matryx">
      <div class="overview">
        <div class="overview__column-1 mobile--order-1">
          <h3 class="text-color--matryx-black subheader">
            <span v-if=" language === 'ru' ">Основные сведения о Matryx</span>
          	<span v-else-if=" language === 'ch' ">Matryx 背景</span>
          	<span v-else-if=" language === 'ge' ">Hintergrund von Matryx</span>
          	<span v-else-if=" language === 'ja' ">Matryxの背景</span>
          	<span v-else-if=" language === 'ko' ">Matryx가 만들어진 배경</span>
          	<span v-else>Matryx Background</span>
          </h3>
          <p class="text-color--matryx-dark-grey">
            <span v-if=" language === 'ru' ">
              Matryx является продуктом компании <a target="_blank" href="http://nanome.ai/">Nanome</a>. Nanome стремится к демократизации науки, техники и научных исследований с использованием технологий виртуальной реальности и блокчейна. Nanome — создатель Calcflow, лидирующего в отрасли набора математических инструментов ВР, и nano-one — интерфейса ВР для наномасштабного проектирования и моделирования.
            </span>
          	<span v-else-if=" language === 'ch' ">
              Matryx 是科技软件公司 <a target="_blank" href="http://nanome.ai/">Nanome</a> 的产品。Nanome 旨于利用虚拟现实和区块链技术寻求民主化的科学、设计和研究。Nanome 创造了行业领先的虚拟现实数学工具包 Calcflow，还创造了纳米级设计模拟用虚拟现实软件 nano-one。
            </span>
          	<span v-else-if=" language === 'ge' ">
              Matryx ist ein Produkt von <a target="_blank" href="http://nanome.ai/">Nanome</a>. Nanome setzt sich für die Demokratisierung von Wissenschaft, Technik und Forschung mit Hilfe von Virtual Reality und Blockchain-Technologie ein. Nanome ist Hersteller von Calcflow, dem branchenweit führenden VR-Mathematik-Toolkit, sowie von nano-one, einem VR-Interface für Design und Simulation im Nanomaßstab.
            </span>
          	<span v-else-if=" language === 'ja' ">
              Matryxは<a target="_blank" href="http://nanome.ai/">Nanome (nanome.ai) </a> の製品です。Nanomeは、バーチャルリアリティとブロックチェーンテクノロジーを使って科学、工学、研究を民主化しようとしています。Nanomeは、業界をリードするVR数学ツールキットであるCalcflowと、ナノスケール設計とシミュレーションのためのVRインターフェースであるnano-oneの製作者です。
            </span>
          	<span v-else-if=" language === 'ko' ">
              Matryx는 <a target="_blank" href="http://nanome.ai/">Nanome</a>의 제품입니다. Nanome은 가상현실 및 블록체인 기술을 이용하여 모든 이용자들이 참여하는 과학, 공학, 연구를 실현시킬 수 있는 방법을 찾기 위해 노력하고 있습니다. Nanome은 업계를 선도하는 VR 수학 툴킷인 Calcflow와 나노 수준의 정밀도를 가진 디자인 및 시뮬레이션을 위한 VR 인터페이스인 nano-one의 제작자이기도 합니다.
            </span>
          	<span v-else>
              Matryx is a product of <a target="_blank" href="http://nanome.ai/">Nanome</a>. Nanome seeks to democratize science, engineering, and research using Virtual Reality and blockchain technology. Nanome is the creator of Calcflow, the industry-leading VR mathematics toolkit, and nano-one, a VR interface for nanoscale design and simulation.
            </span>
          </p>
        </div>
        <div class="overview__column-2 mobile--order-2 overview__img--1">
        </div>
      </div>
      <div class="overview">
        <div class="overview__column-2 overview__img--2">
        </div>
        <div class="overview__column-1">
          <h3 class="text-color--matryx-black subheader">
            <span v-if=" language === 'ru' ">Проблема взаимодействия</span>
          	<span v-else-if=" language === 'ch' ">合作问题</span>
          	<span v-else-if=" language === 'ge' ">Das Kollaborationsproblem</span>
          	<span v-else-if=" language === 'ja' ">コラボレーションの問題</span>
          	<span v-else-if=" language === 'ko' ">협업 문제</span>
          	<span v-else>The Collaboration Problem</span>
          </h3>
          <p class="text-color--matryx-dark-grey">
            <span v-if=" language === 'ru' ">
              Решение самых сложных проблем в мире в самодостаточных подразделениях приводит к дублированию усилий и избыточности. Создания глобального сообщества, которое поощряет и стимулирует обмен идеями, значительно сокращает время создания инновации и позволяет решать проблемы с такой высокой скоростью, которая была бы невозможна в другой ситуации.<br/> <br/>Усилия в области исследований и инженерных разработок являются разрозненными. Время и деньги тратятся впустую, когда различные команды работают над одной и той же проблемой без координации между собой. Признание и гранты получают последние люди, которые работали над проблемой, а десятки важнейших соавторов остаются без внимания. Таким образом, нет никаких стимулов для сотрудничества с другими группами и никакого хранилища сведений о решенных проблемах.
            </span>
          	<span v-else-if=" language === 'ch' ">
              在筒仓内解决世上最困难的问题导致成倍的工作和冗余。通过提供一个以交换创意为主的全球化社区，创新周期可以被大幅缩短，而刁钻的问题也能迎刃而解。
              <br/> <br/>
              目前，研究和设计工作被碎片化。当不同的团队独自应对相同的问题时，时间和金钱都被浪费了。不仅如此，荣誉和奖赏通常归于最后解决问题的人，而忽视了之前的关键贡献者。因此，没有与其他团队合作的动机，也不会有已解决问题的知识库。
            </span>
          	<span v-else-if=" language === 'ge' ">
              Die schwierigsten Probleme der Welt isoliert zu lösen führt zur Verdopplung des Aufwandes und zu Redundanz. Durch die Bereitstellung einer globalen Community, die den Austausch von Ideen fördert und anregt, wird die Innovationszeit deutlich reduziert und Probleme werden mit einer ansonsten unerreichbaren Geschwindigkeit gelöst.
              <br/><br/>
              Bemühungen in Forschung und Technik sind fragmentiert. Es werden Zeit und Geld verschwendet, wenn verschiedene Teams ohne Koordination an demselben Problem arbeiten. Anerkennung und Fördergelder gehen an diejenigen, die als Letzte an einem Problem gearbeitet haben, während Dutzende entscheidender Mitwirkender unbeachtet bleiben. Es besteht somit kein Anreiz zur Zusammenarbeit mit anderen Teams und es existiert kein Archiv bereits gelöster Probleme.
            </span>
          	<span v-else-if=" language === 'ja' ">
              世界でも最も困難な問題を個々に解決しようとすれば、労力の重複と冗長性につながります。アイデアの交換を奨励するグローバルなコミュニティを提供することにより、イノベーションにかかる時間が大幅に短縮され、他の方法では不可能な速度で問題が解決されます。
              <br/> <br/>
              研究と工学の努力は分断されており、異なるチームが同じ問題を調整せずに作業する場合、時間と資金が無駄になります。評価と助成金は、問題について最後に取り組んだ人々に送られ、何十人という重要な貢献者達を無視してしまいます。したがって、他のチームと協力するインセンティブはなく、解決された問題の保存場所もありません。
            </span>
          	<span v-else-if=" language === 'ko' ">
              세계에서 가장 높은 난이도를 가진 문제들을 서로 고립된 환경에서 해결하는 것은 노력의 중복과 낭비를 야기하게 됩니다. 아이디어의 교환을 장려하고 제도적으로 그것에 대해 보상을 해주는 전세계적 커뮤니티를 마련함으로써 혁신을 위해 소비되는 시간이 엄청나게 단축되게 됨은 물론 많은 문제들이 이전에는 불가능하다고 여겨졌던 속도로 해결됩니다.
              <br/> <br/>
              대체로 연구 및 공학 분야에서 투자되는 노력은 파편화되어 있기 마련입니다. 복수의 팀들이 서로 간의 조율없이 동일한 문제를 해결하기 위해 노력할 때 시간과 돈이 낭비됩니다. 인지도와 보상은 문제의 해결을 위해 가장 나중에 노력한 사람들에게 돌아가며 수십명의 중요한 기여자들의 노력은 무시됩니다. 다른 팀들과의 협동에 대한 보상이 없음은 물론, 해결된 문제들에 대한 보관 역시 갖추어져 있지 않습니다.
            </span>
          	<span v-else>
              Solving the world’s hardest problems in silos leads to duplication of effort and redundancy. By providing a global community that encourages and incentivizes the exchange of ideas, time to innovation is greatly reduced while problems are solved at a rate otherwise impossible.
              <br/> <br/>
              Research and engineering efforts are fragmented. Time and money are wasted when different teams work on the same problem without coordination. Recognition and grants go to the last people to work on a problem, ignoring dozens of critical contributors. As such there’s no incentive to cooperate with other teams, and no repository of solved problems.
            </span>
          </p>
        </div>
      </div>
      <div class="overview">
        <div class="overview__column-1 mobile--order-1">
          <h3 class="text-color--matryx-black subheader">
            <span v-if=" language === 'ru' ">Решение Matryx</span>
          	<span v-else-if=" language === 'ch' ">Matryx 平台之解决方案</span>
          	<span v-else-if=" language === 'ge' ">Die Matryx-Lösung</span>
          	<span v-else-if=" language === 'ja' ">Matryxソリューション</span>
          	<span v-else-if=" language === 'ko' ">Matryx의 해결책</span>
          	<span v-else>The Matryx Solution</span>
          </h3>
          <p class="text-color--matryx-dark-grey">
            <span v-if=" language === 'ru' ">
              Системы вознаграждений на базе блокчейна от Matrix обеспечивает стимулы для совместного решения проблем. Авторы получают вознаграждение за свой вклад в виде токенов MTX. Любое лицо может размещать вознаграждения за решение проблем на Matryx. Участники соревнуются в решении этих проблем в ходе турнира.
              <br/> <br/>Решение, победившее в каждом раунде, публикуется, чтобы новые авторы смогли добавить к нему что-то свое в его новом воплощении. Все это позволяет пользователям быстрее и эффективней достигать целей. После решения проблемы награды и знаки признания будут выданы всем участникам победившего решения, а не только последнему соавтору для обеспечения объективности и прозрачности.
            </span>
          	<span v-else-if=" language === 'ch' ">
          	  Matryx 基于区块链的赏金制度促进了解决问题所需的协作性。创造者因贡献而获得MTX代币回报。任何人均可发布赏金到 Matryx平台上。参与者们可在答题过程中竞争以求解决这些学术上的难题。
              <br><br>
              每一轮胜出的解决方案被公开分享，以便新的贡献者可以融入新的迭代，使用户更快、更有效地实现目标。问题一旦解决，荣誉与奖赏会被赋予所有胜出的贡献者，而不仅仅是最后一位贡献者，以体现公平和透明。
          	</span>
          	<span v-else-if=" language === 'ge' ">
          	  Das blockchainbasierte Bounty-System von Matryx bietet Anreize zur kollaborativen Problemlösung. Urheber werden für ihre Beiträge mit MTX-Tokens belohnt. Jeder kann in Matryx Belohnungen posten. Teilnehmer treten in einem Wettkampf gegeneinander an, um diese Probleme zu lösen.
              <br><br>Die siegreiche Lösung jeder Runde wird öffentlich geteilt, sodass neue Mitwirkende sie als Grundlage für eine neue Iteration verwenden und die Nutzer das Ziel somit schneller und effektiver erreichen können. Sobald ein Problem gelöst ist, werden Belohnungen und Anerkennung an alle siegreichen Mitarbeiter – nicht nur an den letzten Mitwirkenden – verteilt, um Fairness und Transparenz zu gewährleisten.
          	</span>
          	<span v-else-if=" language === 'ja' ">
          	  Matryxのブロックチェーンベースの報奨システムは、協力的な問題解決のインセンティブを提供し、クリエイターはMTXトークンによって報酬を受け取ります。誰でもMatryxに報奨を掲示でき、参加者はトーナメントでこれらの問題を解決するために競争します。
              <br><br>
              各ラウンドで勝利した解決策は公に共有され、新しい貢献者が新しいバージョンにリミックスでき、ユーザーはより迅速かつ効果的に目標に到達できます。問題が解決されると、公平性と透明性のために、最後の投稿者だけでなく、勝利した貢献者全員に報奨と評価が与えられます。
          	</span>
          	<span v-else-if=" language === 'ko' ">
          	  Matryx의 블록체인 기반의 포상 제도는 협업적 문제해결에 대해 보상을 제공합니다. 창작자들은 그들의 기여에 대해 MTX 토큰을 통해 보상을 받게 됩니다. 누구나 Matryx에 포상금을 게시할 수 있습니다. 참가자들은 토너먼트 내에서 이 문제들의 해결을 위해 서로 경쟁합니다.
              <br><br>각 라운드에서 우승하는 해결책은 모든 사람들에게 공유되며 이와 더불어 새 기여자들이 새로운 버전으로 재변형을 할 수 있기 때문에 이용자들이 목표에 더 빠르고 더 효율적으로 도달할 수 있습니다. 문제가 해결되면 보상 및 인지도는 공정성과 투명성을 위해 가장 나중의 기여자가 아닌 우승에 기여한 모든 참가자들에게 주어집니다.
          	</span>
          	<span v-else>
              Matryx’s blockchain-based bounty system provides incentives for collaborative problem solving. Creators are rewarded for contributions with MTX tokens. Anyone can post bounties to Matryx. Participants compete to solve these problems in a tournament.
              <br/> <br/>The winning solution of each round is shared publicly so that new contributors can remix into a new iteration, enabling users to reach the goal faster and more effectively.
              Once a problem is solved, rewards and recognition are given to all winning contributors, not just the last contributor, for fairness and transparency.
          	</span>
          </p>
          <a :href="href" target="_blank" @click="whitePaperClick(language)">
            <button class="btn-red whitepaper-btn">
              <span v-if=" language === 'ru' ">
                Прочитайте техническую документацию
              </span>
            	<span v-else-if=" language === 'ch' ">阅读白皮书</span>
            	<span v-else-if=" language === 'ge' ">Lesen Sie das White Paper</span>
            	<span v-else-if=" language === 'ja' ">ホワイトペーパーを読む</span>
            	<span v-else-if=" language === 'ko' ">백서를 읽어보세요</span>
            	<span v-else>Read the Whitepaper</span>
            </button>
          </a>
        </div>
        <div class="overview__column-2 mobile--order-2 overview__img--3">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { appAnalytics } from '@/analytics'

export default {
  name: 'CompanyOverview',

  methods: {
    whitePaperClick (language) {
      appAnalytics.whitePaperClick(`What-Is-Matryx - ${language}`)
    }
  },

  computed: {
    language () {
      return this.$store.state.language
    },

    href () {
      if (this.language === 'ch') {
        return '/matryx-whitepaper-ch.pdf'
      }
      return '/matryx-whitepaper.pdf'
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/css/colors';

#what-is-matryx {
  margin-top: 0px;
  padding-top: 40px;

  .subheader {
    font-size: 24px;
  }

  p > a {
    color: $matryx-blue;

    &:hover {
      color: $matryx-light-blue;
      text-decoration: none;
    }
    &:active {
      color: $matryx-dark-grey;
    }
    &:focus {
      text-decoration: none;
    }
  }

  .overview {
    display:-webkit-box;display:-ms-flexbox;display:flex;
    justify-content: space-between;
    padding: 30px 0;
    border-bottom: 1px solid $light-purple-border;

    & > * {
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }
    &__img--1 {
      background-image: url('../../assets/images/overview/co0.jpg');
    }
    &__img--2 {
      background-image: url('../../assets/images/overview/co2.jpg');
    }
    &__img--3 {
      background-image: url('../../assets/images/overview/co1.jpg');
    }

    &__column-1,
    &__column-2 {
      width: calc(50% - 40px);

    }
    &__column-1 {
    }
    &__column-2 {

      img {
        width: 100%;
      }
    }
  }

  .btn-red {
    background-color: $white;
    color: $matryx-red;
    border-radius: 25px;
    text-transform: uppercase;

    &:hover {
      background-color: $matryx-red;
      color: $white;
    }
  }

  .whitepaper-btn {
    width: 100%;
    font-size: 18px;
  }

  /*----- MEDIA QUERIESS -----*/
  @media screen and (max-width: 1000px) {
    .overview {
      flex-direction: column;

      &__column-1,
      &__column-2 {
        width: 100%;
        float: none;

        img {
          margin-bottom: 30px;
        }
      }
    }
    .mobile--order-1 {
      order: 1;
    }
    .mobile--order-1 {
      order: 2;
    }
  }
}
</style>
