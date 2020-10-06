import jhToast from './toast';

export default {
    install(Vue, options) {
        const jhToastC = Vue.extend(jhToast);


        Vue.prototype.$toast = message => {
            const vm = new jhToastC({
                propsData: {
                    message
                }
            }).$mount('#jh-alerts');
        };
    }
}
