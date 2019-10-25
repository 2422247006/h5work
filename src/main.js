import Vue from 'vue'
import App from './App.vue'
import './assets/reset.css'
import router from './router'
import AMap from 'vue-amap';
Vue.use(AMap);

// 初始化vue-amap
AMap.initAMapApiLoader({
  // 高德key
  key: 'a6bb26f6dc290ca3b72c41a17dfb4ac8',
  // 插件集合 （插件按需引入）
  plugin: ['AMap.Geolocation']
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
