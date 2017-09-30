<template>
  <section class="team-member member">
    <img class="team-member__img member__img" :src="src" :alt="alt">

    <div class="team-member__name">{{ name }}</div>

    <div class="team-member__title member__title">
      <span v-if=" language === 'ch' "> {{ chTitle }} </span>
      <span v-else> {{ title }} </span>
    </div>

    <div class="team-member__social-icons">
      <a :href="linkedInLink" target="_blank" v-show="linkedInLink">
        <img class="linkedin icon" src="../assets/icons/icon-linkedin.png">
      </a>
      <a :href="twitterLink" target="_blank" v-show="twitterLink">
        <img class="twitter icon" src="../assets/icons/icon-twitter.gif">
      </a>
      <a :href="githubLink" target="_blank" v-show="githubLink">
        <img class="icon" src="../assets/icons/icon-github.png">
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TeamMember',

  props: {
    src: String,
    alt: String,
    name: String,
    title: String,
    chTitle: String,
    linkedInLink: {
      type: String,
      default: ''
    },
    twitterLink: {
      type: String,
      default: ''
    },
    githubLink: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.team-member__name {
  font-size: 14px;
  opacity: 0.8;
}
.team-member__title {
  font-size: 11px;
  opacity: 0.8;
  margin: 2.5px;
}

.team-member__social-icons {
  width: 140px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.icon {
  height: 25px;
  width: 25px;
  margin: 5px;
}
</style>
