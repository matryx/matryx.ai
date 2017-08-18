<template>
  <div class="t-navbar uppercase">
    <img class="matryx-logo" src="../../assets/images/Matryx-Logo-Black-large.svg">
    <div class="links">
      <div class="link">Whitepaper</div>
      <div class="link">What is Matryx</div>
      <div class="link">About</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style lang="scss">
.t-navbar {
  display: flex;
  align-items: center;
  top: 52px;
  position: relative;
  height: 75px;
  width: 100%;
  padding: 20px 75px;
  background-color: white;

  .matryx-logo {
    width: 150px;
  }

  .links {
    display: flex;
    flex-wrap: wrap;
    width: 300px;
    justify-content: space-evenly;
  }
}

@media screen and (max-width: 800px) {
  .t-navbar {
    display: none;
  }
}
</style>
