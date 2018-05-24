import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
const Home = () => import('@/components/Home.vue');

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'lj_home',
      component: Home
    }
  ]
});
