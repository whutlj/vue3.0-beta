import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'mint-ui/lib/style.css';
import '@/assets/js/index.ts';
Vue.config.productionTip = false;

import { Button, Popup } from 'mint-ui';

Vue.component(Button.name, Button);
Vue.component(Popup.name, Popup);
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
