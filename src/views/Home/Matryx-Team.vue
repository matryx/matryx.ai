<template>
  <section class="matryx-team">
    <div class="content-container content-container--large">
      <div class="matryx-team__title">
        <h2 class="matryx-team__title__title">The Team</h2>
        <div class="matryx-team__title__line"></div>
      </div>

      <div class="matryx-team__team">
        <div class="matryx-team__team__members" v-for="member in team">
          <Team-Member
            :src="member.src"
            :alt="member.name"
            :name="member.name"
            :title="member.title"
            :linkedInLink="member.linkedInLink"
            :twitterLink="member.twitterLink"
          >
          </Team-Member>
        </div>
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
import Scott from '@/assets/images/team/scott.jpg'
import Adam from '@/assets/images/team/adam.jpg'
import Edgardo from '@/assets/images/team/edgardo.jpg'
import Kyle from '@/assets/images/team/kyle.jpg'
import Vincent from '@/assets/images/team/vincent.jpg'
import Greg from '@/assets/images/advisors/Greg.jpg'
import Ben from '@/assets/images/advisors/Ben.jpg'
import Jurgen from '@/assets/images/advisors/Jurgen.jpg'
import David from '@/assets/images/advisors/David.jpg'
import Geoff from '@/assets/images/advisors/Geoff.jpg'
import Graham from '@/assets/images/advisors/Graham.jpg'
import Mark from '@/assets/images/advisors/Mark.jpg'
import Paul from '@/assets/images/advisors/Paul.jpg'
import Silvia from '@/assets/images/advisors/Silvia.jpg'
import Dan from '@/assets/images/advisors/Dan.jpg'
import Deb from '@/assets/images/advisors/Deb.jpg'
import John from '@/assets/images/advisors/John.jpg'
import Bruna from '@/assets/images/advisors/Bruna.jpg'

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
        src: Steve,
        linkedInLink: 'https://www.linkedin.com/in/stevenmccloskey/',
        twitterLink: 'https://www.twitter.com/StevenMcCloskey'
      }, {
        name: 'Keita Funakawa',
        title: 'Chief Operations Officer',
        src: Keita,
        linkedInLink: 'https://www.linkedin.com/in/keitawf/',
        twitterLink: 'https://www.twitter.com/keitawf/'
      }, {
        name: 'Scott Morgan',
        title: 'Chief Financial Officer',
        src: Scott,
        linkedInLink: 'https://www.linkedin.com/in/scottdmorgan/'
      }, {
        name: 'Edgardo Leija',
        title: 'Chief Experience Officer',
        src: Edgardo,
        linkedInLink: 'https://www.linkedin.com/in/edgardoLeija',
        twitterLink: 'https://www.twitter.com/edgardoLeija'
      }, {
        name: 'Vincent Brunet',
        title: 'Chief Technology Officer',
        src: Vincent,
        linkedInLink: 'https://www.linkedin.com/in/vbrunet/'
      }, {
        name: 'Adam Simon',
        title: 'Project Manager',
        src: Adam,
        linkedInLink: 'https://www.linkedin.com/in/ottomanbob/',
        twitterLink: 'https://www.twitter.com/ottomanbob/'
      }, {
        name: 'Kyle Lee',
        title: 'Mathematician',
        src: Kyle,
        linkedInLink: 'https://www.linkedin.com/in/kylelee4c5/',
        twitterLink: 'https://www.twitter.com/themrkylelee'
      }],
      advisors: [{
        name: 'Greg Horowitt',
        desc: 'Venture Capitalist, Author, Serial Entrepreneur',
        src: Greg
      }, {
        name: 'Benjamin Bratton',
        desc: 'Professor of Visual Arts at UCSD, Author',
        src: Ben
      }, {
        name: 'Jurgen Schulze',
        desc: 'Prof. of Computer Science at UCSD. 18+ years in VR & Computer Graphics',
        src: Jurgen
      }, {
        name: 'David Brin',
        desc: 'Author, Futurist, Public Speaker',
        src: David
      }, {
        name: 'Geoff Odell',
        desc: 'CEO at Trusted-HIT | former Novartis VP of Global Operations',
        src: Geoff
      }, {
        name: 'Ronald Graham',
        desc: 'Inventor of Grahamʼs Number | Mathematician and Chief Scientist at CalIT2',
        src: Graham
      }, {
        name: 'Mark Thiemens',
        desc: 'Former dean of Physical Sciences at UC San Diego',
        src: Mark
      }, {
        name: 'Paul Puey',
        desc: 'CEO & Co-Founder at Airbitz',
        src: Paul
      }, {
        name: 'Silvia Mah',
        desc: 'Executive Director of Hera-Labs',
        src: Silvia
      }, {
        name: 'Daniel Berard',
        desc: 'Former Lead Engineer at Accelrys/Dassault Systemes',
        src: Dan
      }, {
        name: 'Deborah Jude',
        desc: 'Communications Officer at Center for Microbiome Innovation at UCSD',
        src: Deb
      }, {
        name: 'John Graham',
        desc: 'Lead Engineer of Pacific Research Platform',
        src: John
      }, {
        name: 'Bruna Mori',
        desc: 'Director of Engagement at The Center for Design and Geopolitics',
        src: Bruna
      }]
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/css/colors';

.matryx-team {
  background-color: #6B3FD6;
  color: $white;
}

.matryx-team__title {
  display: flex;
  flex-direction: row;
}

.matryx-team__title__title {
  width: 20%;
  font-size: 200%;
}

.matryx-team__title__line {
  border-bottom: 1px solid $white;
  width: 75%;
  height: 20px;
}

.matryx-team__team {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.matryx-advisors__title__title {
  width: 30%;
  font-size: 200%;
  float: right;
  padding-top:90px;
}

.matryx-advisors__title__line {
  border-bottom: 1px solid $white;
  width: 65%;
  padding-top:50px;
  padding-bottom:60px;
}


</style>
