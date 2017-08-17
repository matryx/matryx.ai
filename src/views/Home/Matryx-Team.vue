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
          >
          </Team-Member>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TeamMember from '@/components/Team-Member'
import Steve from '@/assets/images/team/steve.jpg'
import Keita from '@/assets/images/team/keita.jpg'
import Scott from '@/assets/images/team/scott.jpg'
import Adam from '@/assets/images/team/adam.jpg'
import Edgardo from '@/assets/images/team/edgardo.jpg'
import Kyle from '@/assets/images/team/kyle.jpg'
import Vincent from '@/assets/images/team/vincent.jpg'

export default {
  name: 'MatryxTeam',

  components: {
    TeamMember
  },

  data () {
    return {
      team: [{
        name: 'Steve McCloskey',
        title: 'Chief Executive Officer',
        src: Steve
      }, {
        name: 'Keita Funakawa',
        title: 'Chief Operations Officer',
        src: Keita
      }, {
        name: 'Scott Morgan',
        title: 'Chief Financial Officer',
        src: Scott
      }, {
        name: 'Edgardo Leija',
        title: 'Chief Experience Officer',
        src: Edgardo
      }, {
        name: 'Vincent Brunet',
        title: 'Chief Technology Officer',
        src: Vincent
      }, {
        name: 'Adam Simon',
        title: 'Project Manager',
        src: Adam
      }, {
        name: 'Kyle Lee',
        title: 'Mathematician',
        src: Kyle
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
  padding: 3rem 2rem;
}

.matryx-team__title__title {
  width: 20%
}

.matryx-team__title__line {
  border-bottom: 1px solid $white;
  width: 80%;
}

.matryx-team__team {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
