<template lang="pug">
  .counter
    button(type="button", @click="e => modifyCount(0)") -
    span {{count}}
    button(type="button", @click="e => modifyCount(1)") +
</template>

<script>
export default {
  name: "Counter",
  data: () => ({
    count: 1
  }),
  methods: {
    modifyCount(dir) {
      if (dir === 1) {
        this.count += 1;
      } else if (this.count > 0){
        this.count -= 1;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .counter {
    display: flex;
    align-items: center;
    button {
      padding: 5px 10px;
      border: none;
      background: var(--accent-color);
      color: var(--text-color);
      font-weight: 600;
      cursor: pointer;
    }
    span {
      margin: 0 20px;
    }
  }
</style>
