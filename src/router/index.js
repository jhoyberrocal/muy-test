import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './../store';
import Login from '../views/Login.vue';
import Home from './../views/Home';
import Stores from "./../views/Stores";
import StoreDetail from "./../views/StoreDetail";

Vue.use(VueRouter);

const requireAuth = async (to, from, next) => {
  try {
    const hasPermission = await store.dispatch("auth/hasPermission");

    if(hasPermission) {
      next();
    }
  } catch (e) {
    next({name: 'Login'});
  }
}

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/app',
    component: Home,
    children: [
      {path: '', name: 'Stores', component: Stores},
      {path: 'store/:id', name: 'StoresDetail', component: StoreDetail}
    ],
    beforeEnter: requireAuth
  }
]

const router = new VueRouter({
  routes
})

export default router
