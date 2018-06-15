import '@/assets/js/class-component-hooks';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'mint-ui/lib/style.css';
import '@/assets/js/index.ts';
import '@/assets/css/index.scss';
import 'animate.css';
import VueLazyLoad from 'vue-lazyload';
// import { Button, Popup, Navbar, TabItem, Header } from 'mint-ui';
import Mint from 'mint-ui';

Vue.config.productionTip = false;
// Vue.component(Button.name, Button);
// Vue.component(Popup.name, Popup);
// Vue.component(Navbar.name, Navbar);
// Vue.component(TabItem.name, TabItem);
// Vue.component(Header.name, Header);
Vue.use(Mint);
Vue.use(VueLazyLoad, {
  preLoad: 1,
  error: '@/assets/img/loayError.png',
  loading: '@/assets/img/loayLoading.png',
  attempt: 1
});
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');

router.afterEach((to, from) => {
  console.log('afterEach');
});
router.beforeEach((to, from, next) => {
  console.log('beforeEach');
  next();
});
router.beforeResolve((to, from, next) => {
  console.log('beforeResolve');
  next();
});
