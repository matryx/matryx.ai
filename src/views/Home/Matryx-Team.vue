<template>
  <section>
    <div class="content-container content-container--large">
      <div class="team-title">
        <h3>The Team</h3>
      </div>

      <div class="team-members" v-for="member in team">
        <Team-Member
          :src="member.src"
          :alt="member.name"
          :name="member.name"
          :title="member.title"
        >
        </Team-Member>
      </div>
    </div>
  </section>
</template>

<script>
import TeamMember from '@/components/Team-Member'
import Steve from '@/assets/images/team/s-steven.jpg'
import Keita from '@/assets/images/team/keita-1024x1024.jpg'

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
      }]
    }
  }
}
</script>

<style lang="scss">

.team-members {
  display: flex;
  flex-direction: row;
}
</style>
