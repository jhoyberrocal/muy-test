<template lang="pug">
  .loading
    img(src="../assets/loader.gif", alt="loader")
</template>

<script>
export default {
name: "Loading"
}
</script>

<style lang="scss" scoped>
  .loading {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(250, 250, 250, .5);
    z-index: var(--z-loading);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .loader {
    opacity: .8;
  }
</style>
