<template>
  <section class="matryx-team bkg--grey-gradient">
    <div class="content-container content-container--large">
      <div class="matryx-team__title">
        <h2 class="matryx-team__title__title">The Team</h2>
        <div class="matryx-team__title__line"></div>
      </div>

      <div class="matryx-team__team">
        <Team-Member class="matryx-team__team__members"
          v-for="(member, index) in team"
          :key="index"
          :src="member.src"
          :alt="member.name"
          :name="member.name"
          :title="member.title"
          :chTitle="member.chTitle"
          :linkedInLink="member.linkedInLink"
          :twitterLink="member.twitterLink"
          :githubLink="member.githubLink"
        ></Team-Member>
      </div>

      <div class="matryx-advisors__title">
        <h2 class="matryx-advisors__title__title">The Advisors</h2>
        <div class="matryx-advisors__title__line"></div>
      </div>
      <div class="matryx-team__advisors">
        <div class="matryx-team__team__advisors" v-for="advisor in advisors">
          <Advisor-Member
            :src="advisor.src"
            :alt="advisor.name"
            :name="advisor.name"
            :desc="advisor.desc"
            :chDesc="advisor.chDesc"
          >
          </Advisor-Member>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TeamMember from '@/components/Team-Member'
import AdvisorMember from '@/components/Advisors-Member'

import Steve from '@/assets/images/team/steve.jpg'
import Keita from '@/assets/images/team/keita.jpg'
import Scott from '@/assets/images/team/Scott.png'
import Adam from '@/assets/images/team/adam.jpg'
import Edgardo from '@/assets/images/team/edgardo.jpg'
import Kyle from '@/assets/images/team/Kyle.png'
import Vincent from '@/assets/images/team/Vincent.png'

import Kai from '@/assets/images/team/Kai.jpg'
import Max from '@/assets/images/team/max.png'
import Dennis from '@/assets/images/team/Dennis.png'
import Edward from '@/assets/images/team/Edward.png'
import Ethan from '@/assets/images/team/Ethan.png'
import Jacqueline from '@/assets/images/team/Jacqueline.png'
import Lilian from '@/assets/images/team/Lilian.png'
import Ty from '@/assets/images/team/Ty.png'

import Greg from '@/assets/images/advisors/greg.jpg'
import Ben from '@/assets/images/advisors/ben.jpg'
import Jurgen from '@/assets/images/advisors/jurgen.jpg'
import David from '@/assets/images/advisors/david.jpg'
import Geoff from '@/assets/images/advisors/geoff.jpg'
import Graham from '@/assets/images/advisors/graham.jpg'
import Mark from '@/assets/images/advisors/mark.jpg'
import Paul from '@/assets/images/advisors/paul.jpg'
import Silvia from '@/assets/images/advisors/silvia.jpg'
import Dan from '@/assets/images/advisors/dan.jpg'
import Deb from '@/assets/images/advisors/deb.jpg'
import John from '@/assets/images/advisors/john.jpg'
import Bruna from '@/assets/images/advisors/bruna.jpg'

export default {
  name: 'MatryxTeam',

  components: {
    TeamMember,
    AdvisorMember
  },

  data () {
    return {
      team: [{
        name: 'Steve McCloskey',
        title: 'Chief Executive Officer',
        chTitle: '',
        src: Steve,
        linkedInLink: 'https://www.linkedin.com/in/stevenmccloskey/',
        twitterLink: 'https://www.twitter.com/StevenMcCloskey'
      }, {
        name: 'Keita Funakawa',
        title: 'Chief Operations Officer',
        chTitle: '',
        src: Keita,
        linkedInLink: 'https://www.linkedin.com/in/keitawf/',
        twitterLink: 'https://www.twitter.com/keitawf/'
      }, {
        name: 'Scott Morgan',
        title: 'Chief Financial Officer',
        chTitle: '',
        src: Scott,
        linkedInLink: 'https://www.linkedin.com/in/scottdmorgan/',
        twitterLink: 'https://twitter.com/btcjournal'
      }, {
        name: 'Edgardo Leija',
        title: 'Chief Experience Officer',
        chTitle: '',
        src: Edgardo,
        linkedInLink: 'https://www.linkedin.com/in/edgardoLeija',
        twitterLink: 'https://www.twitter.com/edgardoLeija',
        githubLink: 'https://github.com/e-matryx'
      }, {
        name: 'Vincent Brunet',
        title: 'Chief Technology Officer',
        chTitle: '',
        src: Vincent,
        linkedInLink: 'https://www.linkedin.com/in/vbrunet/',
        twitterLink: 'https://www.twitter.com/seriousbrunet',
        githubLink: 'https://github.com/VincentBrunet'
      }, {
        name: 'Adam Simon',
        title: 'Project Developer',
        chTitle: '',
        src: Adam,
        linkedInLink: 'https://www.linkedin.com/in/ottomanbob/',
        twitterLink: 'https://www.twitter.com/ottomanbob/'
      }, {
        name: 'Kyle Lee',
        title: 'Mathematician',
        chTitle: '',
        src: Kyle,
        linkedInLink: 'https://www.linkedin.com/in/kylelee4c5/',
        twitterLink: 'https://www.twitter.com/themrkylelee',
        githubLink: 'https://github.com/k-matryx'
      }, {
        name: 'Kai Wang',
        title: 'VP Software Development',
        chTitle: '',
        src: Kai,
        linkedInLink: 'https://www.linkedin.com/in/kai-wang-1155b064'
      }, {
        name: 'Dennis Chiang',
        title: 'Developer',
        chTitle: '',
        src: Dennis,
        linkedInLink: 'https://www.linkedin.com/in/dennis-tsung-chen-chiang-442b322a/'
      }, {
        name: 'Max Howard',
        title: 'Architect',
        chTitle: '',
        src: Max,
        linkedInLink: 'https://www.linkedin.com/in/maxwell-howard-b0a34798/',
        githubLink: 'https://github.com/Astrovicis'
      }, {
        name: 'Edward Zhou',
        title: 'Developer',
        chTitle: '软件开发人',
        src: Edward
      }, {
        name: 'Ethan Vanderhorn',
        title: 'Developer',
        chTitle: '软件开发人',
        src: Ethan,
        linkedInLink: 'https://www.linkedin.com/in/ethan-vander-horn-46556b107/'
      }, {
        name: 'Jacqueline Bontigao',
        title: 'Developer',
        chTitle: '软件开发人',
        src: Jacqueline,
        linkedInLink: 'https://www.linkedin.com/in/jacqueline-bontigao-0661ab120/'
      }, {
        name: 'Lilian Angel',
        title: 'Developer',
        chTitle: '软件开发人',
        src: Lilian,
        linkedInLink: 'https://www.linkedin.com/in/lilianangel/'
      }, {
        name: 'Ty Stahnke',
        title: 'Developer',
        chTitle: '软件开发人',
        src: Ty,
        linkedInLink: 'https://www.linkedin.com/in/tystahnke/'
      }],

      advisors: [{
        name: 'Greg Horowitt',
        desc: 'Venture Capitalist, Author, Serial Entrepreneur',
        chDesc: '天使投资人，作家，企业家',
        twitterLink: 'https://www.twitter.com/themrkylelee',
        src: Greg
      }, {
        name: 'Benjamin Bratton',
        desc: 'Professor of Visual Arts at UCSD, Author',
        chDesc: '加州大学圣地亚哥分校视觉艺术教授，作家',
        src: Ben
      }, {
        name: 'Paul Puey',
        desc: 'CEO & Co-Founder at Airbitz',
        chDesc: 'Airbitz钱包创始人',
        src: Paul
      }, {
        name: 'David Brin',
        desc: 'Author, Futurist, Public Speaker',
        chDesc: '(大卫▪布林) 著名作家，未来学家，tedtalk演讲人',
        src: David
      }, {
        name: 'Geoff Odell',
        desc: 'CEO at Trusted-HIT | former Novartis VP of Global Operations',
        chDesc: '首席执行官|前诺华全球业务副主席',
        src: Geoff
      }, {
        name: 'Ronald Graham',
        desc: 'Inventor of Grahamʼs Number | Mathematician and Chief Scientist at CalIT2',
        chDesc: '(葛立恆) 知名数学家，美国数学学会（AMS）主席',
        src: Graham
      }, {
        name: 'Mark Thiemens',
        desc: 'Former dean of Physical Sciences at UC San Diego',
        chDesc: '(马克▪蒂门斯) 前加州大学圣地亚哥分校物理院校主席',
        src: Mark
      }, {
        name: 'Jurgen Schulze',
        desc: 'Prof. of Computer Science at UCSD. 18+ years in VR & Computer Graphics',
        chDesc: '加州大学圣地亚哥分校计算机学教授，虚拟现实经验以及计算机图像设计专家',
        src: Jurgen
      }, {
        name: 'Silvia Mah',
        desc: 'Executive Director of Hera-Labs',
        chDesc: '实验室的执行董事',
        src: Silvia
      }, {
        name: 'Daniel Berard',
        desc: 'Former Lead Engineer at Accelrys/Dassault Systemes',
        chDesc: '前首席工程师',
        src: Dan
      }, {
        name: 'Deborah Jude',
        desc: 'Communications Officer at Center for Microbiome Innovation at UCSD',
        chDesc: '加州大学圣地亚哥分校微生物发展通讯执行官',
        src: Deb
      }, {
        name: 'John Graham',
        desc: 'Lead Engineer of Pacific Research Platform',
        chDesc: '太平洋研究中心首席工程师',
        src: John
      }, {
        name: 'Bruna Mori',
        desc: 'Director of Engagement at The Center for Design and Geopolitics',
        chDesc: '设计和地缘、政治中心参与总监',
        src: Bruna
      }]
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/css/colors';

.bkg--grey-gradient {
  // background-image: url('../../assets/images/backgrounds/greygradient.png');
  // background-size:cover;
  // background-repeat: no-repeat;

  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#333c44+0,333c44+50,636a74+100 */
  background: rgb(51,60,68); /* Old browsers */
  background: -moz-linear-gradient(-45deg, rgba(51,60,68,1) 0%, rgba(51,60,68,1) 50%, rgba(99,106,116,1) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(-45deg, rgba(51,60,68,1) 0%,rgba(51,60,68,1) 50%,rgba(99,106,116,1) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(135deg, rgba(51,60,68,1) 0%,rgba(51,60,68,1) 50%,rgba(99,106,116,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#333c44', endColorstr='#636a74',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
}

.matryx-team__title,
.matryx-advisors__title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: $white;
}

.matryx-team__title__title {
  flex-flow: 0 1 auto;
  font-size: 35px;
  color: $white;
}

.matryx-team__title__line {
  border-bottom: 1px solid $matryx-light-blue;
  width: calc(100% - 190px);
  height: 20px;
}

.matryx-team__team {
  display: flex;
  color: $white;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 90px;
}

.matryx-advisors__title__title {
  font-size: 200%;
  color: $white;
  order: 2;
}

.matryx-advisors__title__line {
  width: calc(100% - 230px);
  border-bottom: 1px solid $matryx-light-blue;
  align-self: center;
}

/*----- MEDIA QUERIES -----*/
@media screen and (max-width: 500px) {
  .matryx-team,
  .matryx-advisors {
    &__team,
    &__advisors {
      margin-top: 20px;
    }
    &__title {
      justify-content: center;
        &__line {display:none;}
    }
  }
  .member {
    margin: 25px 6px;
  }
}

</style>
