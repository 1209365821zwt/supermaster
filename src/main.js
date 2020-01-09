import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './until/rem'
import baseComponent from './plugins/baseComponent';
import api from './until/http';
import directive from './directives';
Vue.use(directive)
Vue.use(baseComponent);

Vue.config.productionTip = false
Vue.prototype.$api=api
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
