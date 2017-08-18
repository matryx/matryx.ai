<template>
  <section>
    <div class="content-container content-container--large nanome">
      <div class="nanome__info">
        <h4 class="nanome__info__title">Built by the Team at Nanome</h4>
        <div class="nanome__info__text">
          Nanome builds intelligent virtual reality interfaces that enable scientists and engineers to collaborate, design and simulate with nanoscale precision. Our software helps advance research and development in life sciences, materials sciences, and nanoengineering by integrating a hands-on virtual reality interface with cloud computing.
        </div>
      </div>
      <div class="nanome__logos">
        <div class="nanone__logos__calcflow logo">
          <img src="../../assets/images/calcflow.png" alt="Calcflow">
        </div>
        <div class="nanome__logos__nanoone logo">
          <img src="../../assets/images/nanoone.png" alt="Nano One">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NanomeInfo'
}
</script>

<style lang="scss" scoped>
.nanome {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: #4A4A4A;
}

.nanome__info {
  padding: 20px 40px;

  &__title {
    font-size: 28px;
  }

  &__text {
    margin-top: 50px;
    font-size: 18px;
    line-height: 30px;
    width: 400px;
  }
}

.logo {
  margin-bottom: 20px;
}

.logo > img {
  max-height: 175px;
  max-width: 175px;
}
</style>
