import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
const Home = () => import('@/components/Home.vue');
const HelloWorld = () => import('@/components/HelloWorld.vue');
const EchartsDemo = () => import('@/components/EchartsDemo.vue');
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'lj_home',
      component: Home
    },
    {
      path: '/hello',
      name: 'hello',
      component: HelloWorld
    },
    {
      path: '/charts',
      name: 'EchartsDemo',
      component: EchartsDemo
    }
  ]
});
