<template>
  <div id="jh-alerts" class="jh-alerts">
    <div ref="toast" class="toast">
      <span>{{message}}</span>
      <i @click="hide">x</i>
    </div>
  </div>
</template>

<script>
export default {
  name: "toast",
  props: ['type', 'message'],
  methods: {
    hide() {
      this.$refs.toast.remove();
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../scss/variables';

  .jh-alerts {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .toast {
    position: fixed;
    top: 0;
    z-index: var(--z-alerts);
    width: 100%;
    height: 40px;
    background-color: var(--accent-color);
    display: flex;
    align-items: center;
    padding: 5px 10px;
    font-weight: bold;
    justify-content: space-between;
    box-shadow: 1px 2px 4px 0 #757575;
    i {
      font-size: rem(20px);
      cursor: pointer;
    }
    @media (min-width: $md-size) {
      max-width: 300px;
      border-radius: 3px;
      height: 45px;
    }
  }

</style>
