import Vue from 'vue';
import Vuex from 'vuex';
import auth from './auth';
import stores from './stores';

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  state: {
    loading: false,
    breadcrumb: ''
  },
  mutations: {
    CHANGE_LOADING(state, payload) {
      state.loading = payload;
    },
    SET_BREAD(state, payload) {
      return new Promise(resolve => {
        state.breadcrumb = payload;
        resolve();
      });
    }
  },
  actions: {
    setLoading({commit}, value) {
      commit('CHANGE_LOADING', value);
    },
    async setBreadcrumb({commit}, value) {
      await commit('SET_BREAD', value);
    }
  },
  modules: {
    auth,
    stores
  }
})
