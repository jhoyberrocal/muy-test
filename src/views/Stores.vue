<template lang="pug">
  section.stores-content
    .stores-header
      h2.store-title Tiendas
      p.store-subtitle Escoge tu pizzería favorita
    .stores-grid(v-if="stores.length")
      .item-grid(:key="store.id", v-for="store in stores")
        stores-card(:store="store")
</template>

<script>
import { mapActions, mapState } from 'vuex';
import StoresCard from "@/components/StoresCard";

export default {
  name: "Stores",
  components: {StoresCard},
  computed: mapState({
    stores: state => state.stores.stores
  }),
  methods: {
    ...mapActions({
      getStores: 'stores/getStores'
    })
  },
  mounted() {
    this.getStores();
  }
}
</script>

<style scoped>

</style>
