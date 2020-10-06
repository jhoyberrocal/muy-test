<template lang="pug">
  .main-container
    header.header-app
      .logo
        img(src='../assets/logo.png')
      a.link-logout(href="javascript:void(0)", @click="e => logout($router)")
        img(src='../assets/ic_contrasena.png')
        span Salir
      router-link.bread-link(to="/app")
        span.bread-link.first-item Pizzerías
        span.bread-sublink(v-if="bread.length") / {{bread}}
    transition(name="slide-fade")
      router-view
    footer-social
</template>

<script>
import {mapActions, mapState} from 'vuex';
import FooterSocial from "@/components/FooterSocial";

export default {
  name: "Home",
  components: {FooterSocial},
  computed: mapState({
    bread: state => state.breadcrumb
  }),
  methods: {
    ...mapActions({
      logout: 'auth/logout'
    })
  }
}
</script>

<style lang="scss" scoped>
  @import "../scss/variables";
  .logo {
    position: fixed;
    top: 10px;
    left: 10px;
    img {
      width: 80px;
    }
    @media (min-width: $sm-size) {
      left: 10%;
    }
    @media (min-width: $md-size) {
      left: 20%;
    }
    @media (min-width: $lg-size) {
      top: 5%;
      left: 8%;
    }
  }
  .header-app {
    display: grid;
    grid-template-columns: 50% 50%;
  }
  .link-logout {
    display: flex;
    grid-column: 2;
    align-items: center;
    justify-self: flex-end;
    color: var(--sub-text);
    font-weight: 400;
    margin-top: -5px;
    font-size: rem(15px);
    img {
      width: 20px;
      margin-right: 5px;
    }
  }
  .bread-link {
    position: relative;
    color: var(--gray-color);
    font-weight: 600;
    justify-self: flex-start;
    font-size: rem(12px);
    padding-top: 5px;
  }
  .first-item {
    color: var(--sub-text);
    font-size: rem(14px);
    &:after {
      content: '';
      position: absolute;
      left: -10%;
      bottom: -2px;
      width: 120%;
      height: 2px;
      background-color: var(--accent-color);
    }
  }
</style>
