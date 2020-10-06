<template lang="pug">
  .hero
    img.hero-bg(src="../assets/imagebkg.png")
    img.hero-img(src="../assets/Pizza.png")
</template>

<script>
  export default {
    name: 'Hero'
  }
</script>

<style lang="scss" scoped>
  @import "../scss/variables";

  .hero {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: var(--z-background);
    &-bg {
      position: relative;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 1;
    }
    &-img {
      position: absolute;
      top: 0;
      left: 5%;
      z-index: 2;
      max-width: 90%;
    }
  }

  @media (min-width: $sm-size) {
    .hero {
      &-img {
        left: 15%;
        max-width: 70%;
      }
    }
  }

  @media (min-width: $lg-size) {
    .hero {
      &-img {
        top: 50%;
        left: 20%;
        max-width: 480px;
        margin-left: -240px;
        margin-top: -240px;
      }
    }
  }
</style>
