import '@/assets/js/class-component-hooks';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'mint-ui/lib/style.css';
// import '@/assets/js/index.ts';
import '@/assets/css/index.scss';
import 'animate.css';
import loadingPic from '@/assets/img/lazyLoading.png';
import errorPic from '@/assets/img/lazyError.png';
// import { Button, Popup, Navbar, TabItem, Header, Lazyload } from 'mint-ui';
import Mint from 'mint-ui';

Vue.config.productionTip = false;
Vue.use(Mint, {
  lazyload: {
    preLoad: 1.3,
    error: errorPic,
    loading: loadingPic,
    attempt: 5
  }
});
// Vue.component(Button.name, Button);
// Vue.component(Popup.name, Popup);
// Vue.component(Navbar.name, Navbar);
// Vue.component(TabItem.name, TabItem);
// Vue.component(Header.name, Header);
// Vue.use(Lazyload, {
//   preLoad: 1,
//   loading: loadingPic,
//   error: errorPic,
//   attempt: 1
// });
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');

// router.afterEach((to, from) => {
//   console.log('afterEach');
// });
// router.beforeEach((to, from, next) => {
//   console.log('beforeEach');
//   next();
// });
// router.beforeResolve((to, from, next) => {
//   console.log('beforeResolve');
//   next();
// });
