<template lang="pug">
  #app
    loading(v-if="loading")
    hero
    main#main
      transition(name="slide-fade")
        router-view
</template>

<script>
import {mapState} from 'vuex';
import Loading from '@/components/Loading';
import Hero from '@/components/Hero';

export default {
  components: {
    Hero,
    Loading
  },
  computed: mapState({
    loading: 'loading'
  })
}
</script>

<style lang="scss" scoped>
@import "scss/variables";

#app {
  width: 100%;
  height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#main {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: var(--z-main);
  padding: 120px 15px 15px;
}

@media (min-width: $lg-size) {
  #main {
    padding: 0;
  }
}

</style>
