import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Nav from '@/components/navs/Nav.vue'
import Footer from '@/components/navs/Footer.vue'

Vue.config.productionTip = false

Vue.component('Navbar', Nav)
Vue.component('Footer', Footer)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
