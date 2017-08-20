<template>
  <section>
    <div class="content-container content-container--large nanome">
      <div class="nanome__info">
        <h4 class="nanome__info__title">Built by the Team at Nanome</h4>
        <div class="nanome__info__text text-color--matryx-dark-grey">
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
@import '../../assets/css/colors';

.nanome {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: #4A4A4A;
}

.nanome__info {
  padding: 20px 40px 20px 0;

  &__title {
    font-size: 38px;
    line-height: 34px;
  }

  &__text {
    margin-top: 30px;
    font-size: 18px;
    line-height: 30px;
    max-width: 400px;
    width: 100%;
  }
}

.logo {
  margin-bottom: 20px;
  min-width: 300px;
  text-align: center;
}

.logo > img {
  max-height: 175px;
  max-width: 175px;
}

/*----- MEDIA QUERIES -----*/
@media screen and (max-width: 850px) {
  .nanome__info {

    &__text {
      max-width: 100%;
    }
  }
  .nanome__logos {
    display:-webkit-box;display:-ms-flexbox;display:flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    margin-top: 50px;

    .logo {
      min-width: 200px;
    }
  }
}
@media screen and (max-width: 500px) {
  .logo {
    img {
      max-height: 125px;
      max-width: 125px;
    }
  }
}
</style>
