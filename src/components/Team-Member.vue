<template>
  <section class="team-member member">
    <img class="team-member__img member__img" :src="src" :alt="alt">

    <div class="team-member__name">{{ name }}</div>

    <div class="team-member__title member__title"> {{ title }} </div>

    <div class="team-member__social-icons">
      <a :href="linkedInLink" target="_blank"> 
        <img class="linkedin icon" :src="linkedinIcon"> 
      </a>
      <a :href="twitterLink" target="_blank">
        <img class="twitter icon" :src="twitterIcon"> 
      </a>
    </div>
  </section>
</template>

<script>
import twitterIcon from '../assets/icons/icon-twitter.gif'
import linkedinIcon from '../assets/icons/icon-linkedin.svg'

export default {
  name: 'TeamMember',

  props: {
    src: String,
    alt: String,
    name: String,
    title: String,
    linkedInLink: String,
    twitterLink: String
  },

  data () {
    return {
      twitterIcon,
      linkedinIcon
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
