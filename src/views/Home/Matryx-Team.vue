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

.matryx-team__title,
.matryx-advisors__title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.matryx-team__title__title {
  font-size: 200%;
  flex-flow: 0 1 auto;
  font-size: 200%;
}

.matryx-team__title__line {
  border-bottom: 1px solid #FFF;
  width: calc(100% - 190px);
  height: 20px;
}

.matryx-team__team {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 90px;
}

.matryx-advisors__title__title {
  font-size: 200%;
  order: 2;
}

.matryx-advisors__title__line {
  width: calc(100% - 230px);
  border-bottom: 1px solid rgb(255, 255, 255);
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
