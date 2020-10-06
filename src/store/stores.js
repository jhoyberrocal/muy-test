const stores = {
    namespaced: true,
    state: {
        stores: {},
        store: {}
    },
    mutations: {
        SET_STORES(state, payload) {
            state.stores = payload;
        },
        SET_STORE(state, id) {
            return new Promise(resolve => {
                for (const key in state.stores) {
                    if (state.stores[key].id === parseInt(id)) {
                        state.store = state.stores[key];
                        resolve();
                    }
                }
            });
        }
    },
    actions: {
        async getStores({dispatch, commit}) {
            const cors = 'https://cors-anywhere.herokuapp.com/';
            const URL = process.env.VUE_APP_API;

            dispatch('setLoading', true, {root: true});

            try {
                const res = await fetch(`${cors}${URL}`, {
                    'method': 'GET',
                    'headers': {
                        'Access-Control-Allow-Origin': '*'
                    }
                });
                const data = await res.json();
                commit('SET_STORES', data.response.stores);
                dispatch('setLoading', false, {root: true});

            } catch (e) {
                this._vm.$toast('Hubo un error');
                dispatch('setLoading', false, {root: true});
            }
        },
        async getStore({dispatch, commit}, id) {
            await dispatch('getStores');
            await commit('SET_STORE', id);
        }
    }
}

export default stores;
