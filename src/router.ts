import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
const Home = () => import('@/components/Home.vue');
const HelloWorld = () => import('@/components/HelloWorld.vue');
const EchartsDemo = () => import('@/components/EchartsDemo.vue');
const DbHome = () => import('@/components/DbHome.vue');
const MovieMain = () => import('@/components/movie/MovieMain.vue');
const MusicMain = () => import('@/components/music/MusicMain.vue');
const BookMain = () => import('@/components/book/BookMain.vue');
const ActivityMain = () => import('@/components/activity/ActivityMain.vue');
const CityMain = () => import('@/components/city/CityMain.vue');
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'DbHome',
      component: DbHome,
      children: [
        {
          path: '',
          name: 'MovieMain',
          component: MovieMain
        },
        {
          path: 'book',
          name: 'BookMain',
          component: BookMain
        },
        {
          path: 'music',
          name: 'MusicMain',
          component: MusicMain
        },
        {
          path: 'city',
          name: 'CityMain',
          component: CityMain
        },
        {
          path: 'activity',
          name: 'ActivityMain',
          component: ActivityMain
        }
      ]
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
