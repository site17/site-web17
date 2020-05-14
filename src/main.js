import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueLazyLoad from 'vue-lazyload'
import PerfectScrollbar from 'vue2-perfect-scrollbar'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'
 
Vue.use(PerfectScrollbar)
Vue.use(VueLazyLoad)


Vue.config.productionTip = false

new Vue({
  // io,
  render: h => h(App),
}).$mount('#app')