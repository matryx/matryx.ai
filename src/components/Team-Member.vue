<template>
  <section class="team-member">
    <img class="team-img" :src="src" :alt="alt">
    <span class="name">{{ name }}</span>
    <div class="title" {{ title }} </span>
    <div class="social-icons">
      <img class="linkedin icon"
        src=""
        alt="LinkedIn Icon"
      >
      <img class="twitter icon"
        :src="twitterIcon"
        alt="Twitter Icon"
      >
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
@import '../assets/css/styles';

.team-member {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 140px;
  height: 195px;
}

.team-img {
  height: 120px;
  width: 120px;
  border-radius: 100%;
}

.social-icons {
  width: 140px;
}

.name {
}

</style>
