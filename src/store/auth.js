import jwt from 'jwt-simple';

const auth = {
    namespaced: true,
    state: {
        auth: {}
    },
    mutations: {
        SET_AUTH(state, {email, password, router}) {
            const secret = 'MyS3cr3tEx4mpl3';
            const token = jwt.encode({email, password}, secret);

            localStorage.setItem('token', token);
            state.user = {email};

            router.push('/app');
        }
    },
    actions: {
        hasPermission({dispatch}) {
            dispatch('setLoading', true, {root: true});

            return new Promise((resolve, reject) => {
                setTimeout(() => {

                    if (localStorage.getItem('token')) {
                        resolve(true);
                    } else {
                        reject();
                    }

                    dispatch('setLoading', false, {root: true});
                }, 1000);
            });
        },
        async login({dispatch, commit}, {email, password, router}) {
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
                let existsUser = false;

                for(const user of data.response.users ) {
                    if (email === user.email && password === user.password) {
                        commit('SET_AUTH', {email, password, router});
                        existsUser = true;
                    }
                }

                if (!existsUser) {
                    dispatch('setLoading', false, {root: true});
                    this._vm.$toast('Usuario o contraseña incorrectos');
                }
            } catch (e) {
                this._vm.$toast('Hubo un error');
                dispatch('setLoading', false, {root: true});
            }
        },
        logout({dispatch}, router) {
            dispatch('setLoading', true, {root: true});
            localStorage.removeItem('token');
            dispatch('setLoading', false, {root: true});
            router.push('/');
        }
    }
}

export default auth;
