import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Carousel3d from 'vue-carousel-3d';
import '@/assets/css/styles.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
Vue.config.productionTip = false;
Vue.use(Carousel3d);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
