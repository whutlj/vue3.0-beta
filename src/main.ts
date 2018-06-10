import '@/assets/js/class-component-hooks';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'mint-ui/lib/style.css';
import '@/assets/js/index.ts';
import ECharts from 'vue-echarts/components/ECharts.vue';
import '@/assets/css/base.scss';
// import ECharts modules manually to reduce bundle size
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';

Vue.component('chart', ECharts);
Vue.config.productionTip = false;
import { Button, Popup } from 'mint-ui';

Vue.component(Button.name, Button);
Vue.component(Popup.name, Popup);
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
