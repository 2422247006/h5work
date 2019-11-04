import Vue from 'vue'
import App from './App.vue'
import './assets/reset.css'
import router from './router'
import AMap from 'vue-amap';
import axios from "axios";
Vue.use(AMap);

const apiUrl = "https://www.hfqhj.cn";

Vue.prototype.$axios = axios;
Vue.prototype.$apuUrl = apiUrl;
Vue.config.productionTip = false

// 初始化vue-amap
AMap.initAMapApiLoader({
  // 高德key
  key: 'a6bb26f6dc290ca3b72c41a17dfb4ac8',
  // 插件集合 （插件按需引入）
  plugin: ['AMap.Geolocation']
});

new Vue({
  render: h => h(App),
  router,
  axios
}).$mount('#app')
