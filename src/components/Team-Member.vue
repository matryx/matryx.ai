<template>
  <section class="team-member member">
    <img class="team-member__img member__img" :src="src" :alt="alt">

    <div class="team-member__name">{{ name }}</div>

    <div class="team-member__title member__title"> {{ title }} </div>

    <div class="team-member__social-icons">
      <img class="linkedin icon":src="twitterIcon">
      <img class="twitter icon":src="twitterIcon">
    </div>
  </section>
</template>

<script>
import twitterIcon from '../assets/icons/icon-twitter.gif'

export default {
  name: 'TeamMember',

  props: {
    src: String,
    alt: String,
    name: String,
    title: String
  },

  data () {
    return {
      twitterIcon
    }
  }
}
</script>

<style lang="scss">
.team-member__title {
  font-size: 11px;
  margin: 2.5px;
}

.team-member__social-icons {
  width: 140px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.icon {
  height: 30px;
  width: 30px;
  margin: 5px;
}
</style>
