<template lang="pug">
  footer.footer-social
    .social-icons
      a(href="/", target="_blank")
        img(src="../assets/facebook.svg")
      a(href="/", target="_blank")
        img(src="../assets/instagram.svg")
    img.logo-footer(src="../assets/Best-Pizza.png")
</template>

<script>
export default {
name: "FooterSocial"
}
</script>

<style lang="scss" scoped>
@import "../scss/variables";
  .footer-social {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    background: #1f1f1f;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: 10px;
    .social-icons {
      display: flex;
      flex-direction: row;
      img {
        width: 18px;
        margin-right: 10px;
      }
    }
    .logo-footer {
      width: 40px;
    }
    @media (min-width: $lg-size) {
      padding: 15px 40px;
    }
  }

</style>
