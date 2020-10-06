<template lang="pug">
  section.stores-content
    .store-hero
      img(:src='`/img/${ID}.png`')
    .stores-header-complex
      .store-data
        h2.store-title {{store.name}}
        p.store-subtitle {{store.address}}
        p.store-description {{store.description}}
      .store-avatar
        img(:src='`/img/${ID}.png`')
    ul.store-list
      li(v-for="(product, idx) in store.products", :key="product.id")
        p {{product.name}}
        counter.counter-product
        img.img-product(:src='`/img/pizzas/${idx + 1}.png`')
</template>

<script>
import {mapActions, mapState} from 'vuex';
import Counter from "@/components/Counter";

export default {
  name: "StoreDetail",
  components: {Counter},
  computed: mapState({
    store: state => state.stores.store,
    ID() {
      return this.$route.params.id;
    }
  }),
  methods: {
    ...mapActions({
      setBreadcrumb: 'setBreadcrumb',
      getStore: 'stores/getStore'
    })
  },
  async mounted() {
    await this.getStore(this.ID);
    await this.setBreadcrumb(this.store.name);
  },
  async beforeDestroy() {
    await this.setBreadcrumb('');
  }
}
</script>

<style scoped>

</style>
