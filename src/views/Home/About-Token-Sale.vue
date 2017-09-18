<template>
  <section id="about-token-sale">
    <!-- I'm Dominique now.-->
    <div class="content-container--large content-container">
      <h2 class="section__header text--left">
        <span v-if=" language === 'ru' ">О нашей продаже токенов</span>
      	<span v-else-if=" language === 'ch' ">关于我们的代币销售</span>
      	<span v-else-if=" language === 'ge' ">Über unseren Token-Verkauf</span>
      	<span v-else-if=" language === 'ja' ">当社のトークンセールについて</span>
      	<span v-else-if=" language === 'ko' ">저희 토큰 판매에 대하여</span>
      	<span v-else>ABOUT OUR TOKEN SALE</span>
      </h2>
      <div class="card-container--horizontal">
        <div class="about-container card-container--vertical">
          <div class="card">
            <h4 class="text-color--matryx-black">
              <span v-if=" language === 'ru' ">Почему мы проводим продажу токенов</span>
            	<span v-else-if=" language === 'ch' ">我们为何拥有代币销售</span>
            	<span v-else-if=" language === 'ge' ">Warum wir einen Token-Verkauf durchführen</span>
            	<span v-else-if=" language === 'ja' ">当社がトークンセールを行う理由</span>
            	<span v-else-if=" language === 'ko' ">저희가 토큰 판매를 하는 이유</span>
            	<span v-else>Why We're Having a Token Sale</span>
            </h4>
            <p class="text-color--matryx-dark-grey">
              <span v-if=" language === 'ru' ">Конечная цель Matryx — стимулирование сотрудничества в областях знаний и создание аналога STEM. Для достижения этой цели нам необходимы ресурсы, которые помогут удовлетворить потребности исследований и разработок и создать сообщество участников и доноров. Продажи токенов быстро стали надежным способом достижения такого роста для технологий, основанных на блокчейне, таких как Matryx.
</span>
            	<span v-else-if=" language === 'ch' ">Matryx平台的终极目标是在知识和创新领域激励合作。要达成这一目标，我们需要可支持研发需求、并有助于创建参与者和贡献者社区的资源。代币销售已迅速成为行之有效的手段，可实现Matryx等基于区块链技术的快速成长。</span>
            	<span v-else-if=" language === 'ge' ">Das ultimative Ziel von Matryx besteht darin, Anreize zur Zusammenarbeit in Wissens- und Entwicklungsfeldern wie den MINT-Bereichen zu schaffen. Um dieses Ziel zu erreichen, benötigen wir Ressourcen, die den Anforderungen im Bereich Forschung und Entwicklung gerecht werden und dabei helfen, eine Community aus Teilnehmern und Mitwirkenden zu erschaffen. Token-Verkäufe haben sich rasch zu einem bewährten Mittel entwickelt, um ein solches Wachstum für blockchainbasierte Technologien wie Matryx zu erzielen.</span>
            	<span v-else-if=" language === 'ja' ">Matryxの最終目標は、STEMのような知識と創造の分野におけるコラボレーションを促進することです。その目標を達成するためには、研究開発の要求を支え、参加者と寄稿者のコミュニティを育成するのに役立つリソースが必要です。今やトークンセールは、Matryxのようなブロックチェーンベースのテクノロジーがこのような成長を達成するための確実な手段となっています。</span>
            	<span v-else-if=" language === 'ko' ">Matryx의 궁극적인 목표는 STEM과 같은 지식 및 창조 분야의 협업을 보상을 통해 장려하는 것입니다. 이 목표의 달성을 위해서 R&D 관련 수요에 응하고 참여자와 기여자로 구성된 커뮤니티의 형성을 지원하는 데 어느 정도의 자원이 필요합니다. 최근 토큰 판매는 Matryx와 같은 블록체인 기반 기술의 성장을 달성하는데 있어서 입증된 수단으로 빠르게 자리잡았습니다.</span>
            	<span v-else>The ultimate goal of Matryx is to incentivize collaboration in fields of knowledge and creation like STEM. To reach that goal, we need resources that support R&#38;D demands and help create a community of participants and contributors. Token Sales have quickly become a proven means to achieve such growth for blockchain-based technologies like Matryx.</span>
            </p>
          </div>
          <div class="card">
            <h4 class="text-color--matryx-black">
              <span v-if=" language === 'ru' ">Как Matryx использует блокчейн</span>
            	<span v-else-if=" language === 'ch' ">Matryx 如何使用区块链</span>
            	<span v-else-if=" language === 'ge' ">So nutzt Matryx die Blockchain</span>
            	<span v-else-if=" language === 'ja' ">Matryxがブロックチェーンを使用する方法</span>
            	<span v-else-if=" language === 'ko' ">Matryx가 블록체인을 활용하는 방법</span>
            	<span v-else>How Matryx Uses the Blockchain</span>
            </h4>
            <p class="text-color--matryx-dark-grey">
              <span v-if=" language === 'ru' ">Используя вознаграждения, основанные на блокчейне, Matryx позволяет пользователям подтверждать вклад каждого участника в разработку решения и вознаграждать его с помощью токенов MTX. Использование токена позволяет нам использовать системы смарт-контрактов, выполнять обновления с течением времени и адаптировать платформу к потребностям пользователей.</span>
            	<span v-else-if=" language === 'ch' ">Matryx 利用基于区块链的赏金，使用户能够验证每位参与者对所有解决方案的贡献度，并用 MTX 代币奖励他们。使用代币使我们能够利用智能合同制度、随时升级、并且灵活地塑造平台以满足用户需求。</span>
            	<span v-else-if=" language === 'ge' ">Mit Hilfe blockchainbasierter Belohnungen ermöglicht es Matryx seinen Nutzern, den Beitrag jedes Teilnehmers zu einer bestimmten Lösung zu validieren und die Person mit MTX-Tokens zu belohnen. Die Nutzung eines Tokens erlaubt es uns, Smart-Contract-Systeme wirksam einzusetzen und mit der Zeit Aufwertungen durchzuführen. Zudem liefert sie uns die nötige Flexibilität, um die Plattform entsprechend den Bedürfnissen der Nutzer zu gestalten.</span>
            	<span v-else-if=" language === 'ja' ">ブロックチェーンベースの報奨を利用するMatryxにより、ユーザーは各参加者のソリューションに対する貢献度を検証し、MTXトークンで報酬を与えることができます。トークンを使用することで、スマートコントラクトシステムを活用し、時間の経過とともにアップグレードし、ユーザーのニーズに合わせてプラットフォームを柔軟に構成することができます。</span>
            	<span v-else-if=" language === 'ko' ">Matryx는 블록체인 기반의 포상 제도를 활용하여 이용자들이 해결책에 대한 각 참여자의 기여도를 확인하고 그것에 대해 MTX 토큰으로 보상할 수 있도록 해줍니다. 토큰의 활용은 스마트 계약 시스템의 활용성 극대화 및 장기간 사용 시의 정기적인 업그레이드를 가능케 함은 물론 이용자들의 수요에 맞춰 플랫폼을 조정할 수 있는 유연성도 확보해 줍니다.</span>
            	<span v-else>Utilizing blockchain-based bounties, Matryx enables users to validate each participant's contribution to a solution and reward them with MTX tokens. Using a token enables us to leverage smart contract systems, upgrade over time, and gives us the flexibility to shape the platform to the needs of the users.</span>
            </p>
          </div>
          <div class="card">
            <h4 class="text-color--matryx-black">
              <span v-if=" language === 'ru' ">Преимущества блокчейна</span>
            	<span v-else-if=" language === 'ch' ">区块链益处</span>
            	<span v-else-if=" language === 'ge' ">Vorteile der Blockchain</span>
            	<span v-else-if=" language === 'ja' ">ブロックチェーンの利点</span>
            	<span v-else-if=" language === 'ko' ">블록체인의 이점</span>
            	<span v-else>Benefits of the Blockchain</span>
            </h4>
            <p class="text-color--matryx-dark-grey">
              <span v-if=" language === 'ru' ">Смарт-контракты снижают затраты на отслеживание и вознаграждение соавторов. Победители каждого раунда конкурса для выдачи вознаграждения получают награды, и создается новое поколение «дочерних» решений. Все итерации управляются контрактами турнира. Происхождение идеи или работы можно легко отследить, и за них можно выплатить справедливое и публичное вознаграждение.</span>
            	<span v-else-if=" language === 'ch' ">智能合同减少了追踪和奖励贡献者的阻力。在每一轮的赏金竞争中，贡献者都会获得奖励，新一代问题也会诞生。所有迭代均由智能合同管理。某个创意或答案的起源可以被轻而易取地追寻到，而且可以公平、公开地被赋予相应奖励。</span>
            	<span v-else-if=" language === 'ge' ">Smart Contracts reduzieren die Friktion, die durch Nachverfolgung und Vergütung der Mitwirkenden entsteht. In jeder Runde eines Bounty-Wettbewerbs werden die Sieger belohnt und eine neue Kindergeneration wird erzeugt. Alle Iterationen werden durch die Turnierverträge verwaltet. Der Ursprung einer Idee oder Arbeit kann mühelos nachverfolgt sowie fair und öffentlich belohnt werden.</span>
            	<span v-else-if=" language === 'ja' ">スマートコントラクトは、貢献者を追跡し報酬を与える際の摩擦を軽減します。報奨競争の各ラウンドで、勝者は報酬を受け取り、次の段階を担う新しい後継者達が創造されます。すべての反復はトーナメントコントラクトによって管理され、アイデアや作業の出所が容易に追跡でき、公平かつ公に報酬を受けることができます。</span>
            	<span v-else-if=" language === 'ko' ">스마트 계약은 기여자를 추적하고 그들에게 보상을 해주는 과정에서 발생하는 비효율을 줄여줍니다. 포상금 경쟁전의 각 라운드별 우승자는 그에 대한 보상을 제공받으며 새로운 세대의 사람들이 나타나게 됩니다. 모든 라운드는 토너먼트 계약에 의해 관리됩니다. 아이디어 또는 작업의 출처를 간단히 추적할 수 있으며 이에 대해 공정하고 공개적으로 보상을 해줄 수 있습니다.</span>
            	<span v-else>Smart contracts reduce the friction of tracking and compensating contributors. Each round of a bounty competition, the winners are rewarded, and a new generation of children is created. All iterations are managed by the tournament contracts. The provenance of an idea or work can be easily tracked and can be rewarded fairly and publicly.</span>
            </p>
          </div>
        </div>
        <div class="roadmap-container card-container--vertical">
          <div class="roadmap">
            <h5 class="text-color--matryx-black roadmap__title">
              <span v-if=" language === 'ru' ">ДОРОЖНАЯ КАРТА</span>
            	<span v-else-if=" language === 'ch' ">路径图</span>
            	<span v-else-if=" language === 'ge' ">ROADMAP</span>
            	<span v-else-if=" language === 'ja' ">ロードマップ</span>
            	<span v-else-if=" language === 'ko' ">로드맵</span>
            	<span v-else>ROADMAP</span>
            </h5>
            <h6 class="roadmap__year text-color--grey">2016</h6>
            <div class="roadmap__section ">
              <div class="roadmap__section__quarter roadmap__section__quarter--past ">Q4</div>
              <div class="roadmap__section__description text-color--matryx-dark-grey">
                <p>
                  <span v-if=" language === 'ru' ">Запуск Nano-One и Calcflow</span>
                	<span v-else-if=" language === 'ch' ">Nano-One 和 Calcflow 发行</span>
                	<span v-else-if=" language === 'ge' ">Start von Nano-One & Calcflow</span>
                	<span v-else-if=" language === 'ja' ">Nano-OneとCalcflowのローンチ</span>
                	<span v-else-if=" language === 'ko' ">Nano-One & Calcflow 런칭</span>
                	<span v-else>Nano-One &#38; Calcflow Launch</span>
                </p>
                <caption>
                  <span v-if=" language === 'ru' ">Первые инструменты STEM для современной ВР</span>
                	<span v-else-if=" language === 'ch' ">首个现代用于科学、科技、工程以及数学的虚拟现实软件</span>
                	<span v-else-if=" language === 'ge' ">Erste MINT-Tools für moderne VR</span>
                	<span v-else-if=" language === 'ja' ">斬新なVRのための最初のSTEMツール</span>
                	<span v-else-if=" language === 'ko' ">현대적인 VR을 위한 최초의 STEM 도구</span>
                	<span v-else>First STEM tools for modern VR</span>
                </caption>
              </div>
            </div>
            <h6 class="roadmap__year text-color--grey">2017</h6>
            <div class="roadmap__section ">
              <div class="roadmap__section__quarter roadmap__section__quarter--past ">Q1</div>
              <div class="roadmap__section__description text-color--matryx-dark-grey">
                <p>
                  <span v-if=" language === 'ru' ">Начало частного бета-тестирования Nano Pro</span>
                	<span v-else-if=" language === 'ch' ">纳米专业内测开放</span>
                	<span v-else-if=" language === 'ge' ">Eröffnung der Private Beta von Nano Pro</span>
                	<span v-else-if=" language === 'ja' ">Nano Proプライベートベータがオープン</span>
                  <span v-else-if=" language === 'ko' ">Nano Pro Private 베타 시작</span>
                	<span v-else>Nano Pro Private Beta Opens</span>
                </p>
                <caption>
                  <span v-if=" language === 'ru' ">Фармацевтические пилотные проекты исследований и разработок  </span>
                	<span v-else-if=" language === 'ch' ">医药研发试验</span>
                	<span v-else-if=" language === 'ge' ">Piloten für pharmazeutische Forschung und Entwicklung</span>
                	<span v-else-if=" language === 'ja' ">医薬品研究開発における試行</span>
                	<span v-else-if=" language === 'ko' ">제약 R&D 예비버전</span>
                	<span v-else>Pharmaceutical R&#38;D pilots</span>
                </caption>
                <br/>
              </div>
            </div>
            <div class="roadmap__section ">
              <div class="roadmap__section__quarter roadmap__section__quarter--past ">Q2</div>
              <div class="roadmap__section__description text-color--matryx-dark-grey">
                <p>
                  <span v-if=" language === 'ru' ">Выпуск технической документации Matryx</span>
                	<span v-else-if=" language === 'ch' ">Matryx 白皮书发布</span>
                	<span v-else-if=" language === 'ge' ">Veröffentlichung des Matryx White Paper</span>
                	<span v-else-if=" language === 'ja' ">Matryxホワイトペーパーのリリース</span>
                	<span v-else-if=" language === 'ko' ">Matryx 백서 공개</span>
                	<span v-else>Matryx White Paper Release</span>
                </p>
                <caption>
                  <span v-if=" language === 'ru' ">Ознакомьтесь с технической документацией здесь </span>
                	<span v-else-if=" language === 'ch' ">
                    <a href="/matryx-whitepaper-ch.pdf" target="_blank" @click="whitePaperClick('ch')"
                    >
                    在此处阅读白皮书
                    </a>
                  </span>
                	<span v-else-if=" language === 'ge' ">Lesen Sie das White Paper hie</span>
                	<span v-else-if=" language === 'ja' ">ホワイトペーパーを読む</span>
                	<span v-else-if=" language === 'ko' ">여기에서 백서를 읽어보세요</span>
                	<span v-else>Read the white paper <a href="/matryx-whitepaper.pdf" target="_blank" @click="whitePaperClick('en')">here</a></span>
                </caption>
                <br/>
              </div>
            </div>
            <div class="roadmap__section ">
              <div class="roadmap__section__quarter roadmap__section__quarter--future">Q3</div>
              <div class="roadmap__section__description text-color--matryx-dark-grey">
                <p>
                  <span v-if=" language === 'ru' ">Начало продажи токенов</span>
                	<span v-else-if=" language === 'ch' ">代币销售启动</span>
                	<span v-else-if=" language === 'ge' ">Start des Token-Verkaufs</span>
                	<span v-else-if=" language === 'ja' ">トークンセール開始</span>
                	<span v-else-if=" language === 'ko' ">토큰 판매 런칭</span>
                	<span v-else>Token Sale Launch</span>
                </p>
                <caption>
                  <span v-if=" language === 'ru' ">Предварительная продажа токенов начинается 6 сентября в 10:00 по Гринвичу (GMT) и допускает покупки на суммы свыше 75 ETH. Период предварительной продажи продолжится одну неделю с 6 по 13 сентября</span>
                	<span v-else-if=" language === 'ch' ">9 月 6 日格林威治标准时间上午 10 时启动代币预售，最低购买量为 75 ETH。预售期将从 9 月 6 日到 9 月 13 日保持开放一周</span>
                	<span v-else-if=" language === 'ge' ">Der Token-Vorverkauf beginnt am 6. September um 10 Uhr GMT für Käufe im Wert von über 75 ETH. Der Vorverkauf bleibt eine Woche lang vom 6. bis 13. September geöffnet.</span>
                	<span v-else-if=" language === 'ja' ">トークンプレセール開始は9月6日午前10時グリニッジ標準時 (GMT) 、75イーサリアム (ETH) 以上の購入が対象。プレセール期間は、9月6日から13日までの1週間。</span>
                	<span v-else-if=" language === 'ko' ">75 ETH를 초과하는 구매에 대한 토큰 사전판매가 GMT 기준 9월 6일 오전 10시에 시작됩니다. 사전판매 기간은 9월 6일부터 9월 13일까지 1주일간입니다.</span>
                	<span v-else>Matryx Token Sale begins Sept. 13 at 10am GMT, and will remain open for four weeks or until the ETH cap is reached.</span>
                </caption>
              </div>
            </div>
            <div class="roadmap__section ">
              <div class="roadmap__section__quarter roadmap__section__quarter--future">Q4</div>
              <div class="roadmap__section__description text-color--matryx-dark-grey">
                <p>
                  <span v-if=" language === 'ru' ">Альфа-платформа Matryx</span>
                	<span v-else-if=" language === 'ch' ">Matryx 平台Alpha测试</span>
                	<span v-else-if=" language === 'ge' ">Matryx-Plattform Alpha</span>
                	<span v-else-if=" language === 'ja' ">Matryxプラットフォームアルファ</span>
                	<span v-else-if=" language === 'ko' ">Matryx 플랫폼 알파</span>
                	<span v-else>Matryx Platform Alpha</span>
                </p>
                <caption>
                  <span v-if=" language === 'ru' ">Выгрузка и загрузка параметрический активов</span>
                	<span v-else-if=" language === 'ch' ">上传和下载参数资产</span>
                	<span v-else-if=" language === 'ge' ">Upload und Download parametrischer Assets</span>
                	<span v-else-if=" language === 'ja' ">パラメトリックアセットのアップロードとダウンロード</span>
                	<span v-else-if=" language === 'ko' ">파라메트릭 자산을 업로드 및 다운로드하세요</span>
                	<span v-else>Upload and download parametric assets</span>
                </caption>
              </div>
            </div>
            <h6 class="roadmap__year text-color--grey">2018</h6>
            <div class="roadmap__section ">
              <div class="roadmap__section__quarter roadmap__section__quarter--future">Q1</div>
              <div class="roadmap__section__description text-color--matryx-dark-grey">
                <p>
                  <span v-if=" language === 'ru' ">Альфа-тестовая сеть торговой площадки</span>
                	<span v-else-if=" language === 'ch' ">市场Alpha测试网</span>
                	<span v-else-if=" language === 'ge' ">Marktplatz Alpha Testnet</span>
                	<span v-else-if=" language === 'ja' ">マーケットプレイスアルファテストネット (Testnet)</span>
                	<span v-else-if=" language === 'ko' ">거래소 알파 테스트넷</span>
                	<span v-else>Marketplace Alpha Testnet</span>
                </p>
                <caption>
                  <span v-if=" language === 'ru' ">Рабочий MVP для общественного пользования. Расширьте сферу исследования и смоделируйте различные решения атрибуции.</span>
                	<span v-else-if=" language === 'ch' ">公用,可行的 最简产品。将焦点扩大至研究与构建多种归因解决方案。</span>
                	<span v-else-if=" language === 'ge' ">Funktionierendes MVP für öffentliche Nutzung. Erweiterung des Schwerpunkts, um eine Vielzahl von Attribution-Lösungen zu erforschen und zu modellieren.</span>
                	<span v-else-if=" language === 'ja' ">一般向けMVPの使用。様々なアトリビューションソリューションの研究とモデル作成に注力する。</span>
                	<span v-else-if=" language === 'ko' ">대중 공개용 작동하는 최소기능제품. 다양한 종류의 귀인 솔루션들의 연구 및 모델링을 위해 관심분야를 넓혀보세요.</span>
                	<span v-else>Working MVP for public use. Expand focus to research and model a variety of attribution solutions.</span>
                </caption>
              </div>
            </div>
            <div class="roadmap__section ">
              <div class="roadmap__section__quarter roadmap__section__quarter--future">Q2</div>
              <div class="roadmap__section__description text-color--matryx-dark-grey">
                <p>
                  <span v-if=" language === 'ru' ">Бета-версия тестовой сети торговой площадки</span>
                	<span v-else-if=" language === 'ch' ">市场Beta测试网</span>
                	<span v-else-if=" language === 'ge' ">Marktplatz Beta Testnet</span>
                	<span v-else-if=" language === 'ja' ">マーケットプレイスベータテストネット (Testnet)</span>
                	<span v-else-if=" language === 'ko' ">거래소 베타 테스트넷</span>
                	<span v-else>Marketplace Beta Testnet</span>
                </p>
                <caption>
                  <span v-if=" language === 'ru' ">Централизованное тестирование внедренных систем. Создание форума репутации, идентификация пользователей и их соавторов.</span>
                	<span v-else-if=" language === 'ch' ">实现系统的集中测试。建立声誉董事会，识别用户及其贡献。</span>
                	<span v-else-if=" language === 'ge' ">Zentralisierte Tests implementierter Systeme. Erstellung der Reputationstabelle zur Identifizierung von Nutzern und ihren Beiträgen.</span>
                	<span v-else-if=" language === 'ja' ">実装されたシステムの集中テスト。評判ボードを作成し、ユーザーとその貢献度を特定する。</span>
                	<span v-else-if=" language === 'ko' ">적용된 시스템에 대한 중앙집중화 테스트. 이용자들과 그들의 기여도를 식별할 평가현황판을 만드세요.</span>
                	<span v-else>Centralized tests of implemented systems. Create reputation board, identifying users and their contributions.</span>
                </caption>
              </div>
            </div>
            <div class="roadmap__section ">
              <div class="roadmap__section__quarter roadmap__section__quarter--future">Q3</div>
              <div class="roadmap__section__description text-color--matryx-dark-grey">
                <p>
                  <span v-if=" language === 'ru' ">Бета-версия главной сети торговой площадки</span>
                	<span v-else-if=" language === 'ch' ">市场Beta主干网</span>
                	<span v-else-if=" language === 'ge' ">Marktplatz Beta Mainnet</span>
                	<span v-else-if=" language === 'ja' ">マーケットプレースベータメインネット (Mainnet)</span>
                	<span v-else-if=" language === 'ko' ">거래소 베타 메인넷</span>
                	<span v-else>Marketplace Beta Mainnet</span>
                </p>
                <caption>
                  <span v-if=" language === 'ru' ">Расширьте базу пользователей до десятков тысяч. Культивируйте экономику практических/менее академических вознаграждений.</span>
                	<span v-else-if=" language === 'ch' ">扩大用户群到成千上万。培养注重实用性而非学术性的赏金经济。</span>
                	<span v-else-if=" language === 'ge' ">Ausdehnung der Nutzerbasis auf mehrere Zehntausend. Entwicklung einer Ökonomie aus praktischen/weniger akademischen Belohnungen.</span>
                	<span v-else-if=" language === 'ja' ">ユーザーベースを数万人に拡大。実用的な学業的でない報奨の経済を育てる。</span>
                	<span v-else-if=" language === 'ko' ">이용자의 규모를 수만명으로 확장시키세요. 학문적 요소에 너무 치우치지 않는 실용적인 포상금 환경을 조성하세요.</span>
                	<span v-else>Expand user base to tens of thousands. Cultivate economy of practical/ less academic bounties.</span>
                </caption>
              </div>
            </div>
            <h6 class="roadmap__year text-color--grey">2019</h6>
            <div class="roadmap__section ">
              <div class="roadmap__section__quarter roadmap__section__quarter--future">Q2</div>
              <div class="roadmap__section__description text-color--matryx-dark-grey">
                <p>
                  <span v-if=" language === 'ru' ">Общественный запуск торговой площадки</span>
                	<span v-else-if=" language === 'ch' ">市场公开发布</span>
                	<span v-else-if=" language === 'ge' ">Öffentlicher Launch des Marktplatzes</span>
                	<span v-else-if=" language === 'ja' ">マーケットプレイスローンチ</span>
                	<span v-else-if=" language === 'ko' ">거래소 공개 런칭</span>
                	<span v-else>Marketplace Public Launch</span>
                </p>
                <caption>
                  <span v-if=" language === 'ru' ">Начало интеграции решений децентрализованного хранения альтчейна и сужение атрибуции + системы репутации.</span>
                	<span v-else-if=" language === 'ch' ">开始整合替换链分散化存储解决方案并缩小归因 + 信誉制度。</span>
                	<span v-else-if=" language === 'ge' ">Beginn der Integration dezentraler Alt-Chain-Speicherlösungen und Eingrenzung der Systeme für Attribution und Reputation.</span>
                	<span v-else-if=" language === 'ja' ">Altチェーンの分散ストレージソリューションの統合を開始し、帰属と評判システムを絞り込む。</span>
                	<span v-else-if=" language === 'ko' ">대안 체인 분산화 저장 솔루션의 통합과 귀인+평가 시스템의 간소화 작업을 시작하세요.</span>
                	<span v-else>Begin to integrate alt-chain decentralized storage solutions and narrow down attribution + reputation systems.</span>
                </caption>
              </div>
            </div>
            <h6 class="roadmap__year text-color--grey">2020</h6>
            <div class="roadmap__section ">
              <div class="roadmap__section__quarter roadmap__section__quarter--future">Q4</div>
              <div class="roadmap__section__description text-color--matryx-dark-grey">
                <p>
                  <span v-if=" language === 'ru' ">Децентрализованная репутация и хранение</span>
                	<span v-else-if=" language === 'ch' ">分散化声誉和存储</span>
                	<span v-else-if=" language === 'ge' ">Dezentrale Reputation & Speicherung</span>
                	<span v-else-if=" language === 'ja' ">分散型の評判とストレージ</span>
                	<span v-else-if=" language === 'ko' ">분산화 평가 & 저장</span>
                	<span v-else>Decentralized Reputation &#38; Storage</span>
                </p>
                <caption>
                  <span v-if=" language === 'ru' ">Дальнейшее поэтапное движение к полностью децентрализованной платформе и уточнение экономики токенов для массового восприятия.</span>
                	<span v-else-if=" language === 'ch' ">继续完全分散化平台的步骤，并完善代币经济以供大规模采用。</span>
                	<span v-else-if=" language === 'ge' ">Weitere Schritte in Richtung einer vollständig dezentralen Plattform und Verfeinerung der Token-Ökonomie für die Übernahme im Massenbetrieb.</span>
                	<span v-else-if=" language === 'ja' ">完全に分散されたプラットフォームに向けたステップを進め、大量採用のためにトークン経済を改良する。</span>
                	<span v-else-if=" language === 'ko' ">완전 분산화 플랫폼의 달성을 위한 절차를 계속 밟아나가면서 동시에 대규모 채용에 대비해 토큰 경제를 재정비하세요.</span>
                	<span v-else>Continue steps towards a fully decentralized platform and refine token economics for mass adoption.</span>
                </caption>
              </div>
            </div>
          </div>
         </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { appAnalytics } from '@/analytics'

export default {
  name: 'AboutTokenSale',

  methods: {
    whitePaperClick (language) {
      appAnalytics.whitePaperClick(`Roadmap - ${language}`)
    }
  },
  computed: {
    language () {
      return this.$store.state.language
    }
  }
  // mounted () {
  //   let section = document.querySelector('#about-token-sale')
  //   let distanceBottom = section.offsetTop
  //   let distanceTop = distanceBottom + window.innerHeight
  //   console.log(section, distanceTop, window.scrollY)
  //   window.onscroll = function () {
  //     let scrollDistance = window.scrollY
  //     if (scrollDistance < distanceTop && scrollDistance > distanceBottom) {
  //       location.hash = '#about-token-sale'
  //     }
  //   }
  // }
}
</script>

<style lang="scss">
@import '../../assets/css/colors';

section#about-token-sale {
  .section__header {
    font-size: 32px;
  }

  .card-container {
    &--horizontal{
      display:-webkit-box;display:-ms-flexbox;display:flex;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
    }
    &--vertical {
      .card {
        display:block;
      }

      &.about-container > * {
        height: calc(33.3333% - 20px);
      }
    }
    &--horizontal {
      margin-top: 40px;

      & > * {
        width: calc(50% - 10px);
      }
    }
  }
  .card {
    border: 1px solid $light-purple-border;
    border-radius: 0;
    padding: 20px;
    margin-bottom: 20px;

    h4, p {
      -webkit-box-flex: 0;
      -ms-flex: 0 1 auto;
      flex: 0 1 auto;
    }

    h4 {
      font-size: 22px;
    }

    img {
      height: auto;
      width: 100%;
    }
  }

  .roadmap {
    max-width: 300px;
    width: 100%;
    margin: 0 0 20px auto;
    right: 20px;
    position: relative;

    &__title {
      font-size: 22px;
      position: relative;
      right: 60px;
    }

    &__year {
      position: relative;
      right: 30px;
      font-size: 20px;
    }

    &__section {
      position:relative;
      border-left: 1px solid $classic-grey;
      display:-webkit-box;display:-ms-flexbox;display:flex;
      padding-left: 25px;

      &:last-child {
        border-left: none;
      }

      & > * {

      }

      &__date {
        display: inline-block;
        font-size: 12px;
        text-transform: uppercase;
        flex: 0 1 0;
        min-width: 80px;
        position: relative;
        left: 30px;

        &--future { color: $matryx-blue; }
        &--past { color: $classic-grey;}
      }

      &__quarter {
        background-color: #80828D;
        border: 3px solid white;
        color: rgba(255, 255, 255, 0.7);
        // display: inline-block;
        border-radius: 50px;
        padding: 2px 2px 2px 2px;
        height: 34px;
        width: 34px;
        // text-align: center;
        position: absolute;
        left: -17px;
        display: flex;
        justify-content: center;
        align-items: center;

          &--future { background-color: $matryx-blue; color: rgba(255,255,255,0.7);}
          &--past { background-color: $classic-grey;color: rgba(255,255,255,0.7);}
      }

      &__description {
        position: relative;
        left: 20px;

        p {
          font-size: 18px;
          margin: 0;
        }
        caption {
          padding: 0;
          display: inline-block;
          font-style:normal;
        }
      }

    }
  }
  /*----- MEDIA QUERIESS -----*/
  @media screen and (max-width: 850px) {
    .card-container {
      &--vertical {
        width: 100%;
      }
      &--horizontal {
        flex-flow:column;
        width: 100%;
        & > * {
          width:100%;
          padding-bottom: 30px;
        }
      }
    }
    .card {
      margin-bottom: 20px;
    }
    .roadmap {
      width:calc(100% - 80px);
      max-width: 500px;
      margin: 0 auto;

      &__title {
        text-align: center;
        right: 0;
      }
    }
  }
  @media screen and (max-width: 500px) {
    .content-container {
      padding: 20px 40px 80px;
    }
  }

}
</style>
