<template lang="pug">
  router-link.store-card(:to="`/app/store/${store.id}`")
    .store-img
      .front
        img(:src="`/img/${store.id}.png`", :alt="store.name")
      .back
        img(:src="`/img/pizzas/${store.id}.png`", :alt="store.name")
    h3.store-title {{store.name}}
    p.store-subtitle {{store.address}}
</template>

<script>
export default {
  name: "StoresCard",
  props: ['store']
}
</script>

<style lang="scss" scoped>
  @import "../scss/variables";

  @keyframes bounce {
    0% {
      height: 0;
    }
    50% {
      height: 100%;
    }
    70% {
      height: 70%;
    }
    100% {
      height: 100%;
    }
  }

  .store-card {
    width: 100%;
    border-radius: 5px;
    color: var(--text-color);

    &:hover {
      .store-img {
        >.front {
          transform: rotateY(180deg);
        }
        >.back {
          opacity: 1;
          transform: rotateY(0deg);
        }
      }
      .store-img:after {
        animation-name: bounce;
        height: 100%;
      }
    }
    .store-img {
      position: relative;
      width: 100%;
      transition: all 0.6s linear;
      .front {
        z-index: 2;
        transform: rotateY(0deg);
      }
      .back {
        transform: rotateY(180deg);
        position: absolute;
        opacity: 0;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition-timing-function: cubic-bezier(.175, .885, .32, 1.275);
        transition-duration: 1s;
        transition-property: transform;
      }
      img {
        width: 100%;
      }
      &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 0;
        bottom: 1%;
        left: 0;
        background: var(--accent-color);
        opacity: .6;
        border-radius: 5px;
        animation-duration: 1s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: 1;
      }
    }
    .store-title {
      padding-top: 8px;
      font-size: rem(16px);
    }
    .store-subtitle {
      padding-top: 10px;
      font-size: rem(14px);
      color: var(--sub-text);
    }
  }
</style>
