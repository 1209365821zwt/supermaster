import Vue from 'vue'
import Vuex from 'vuex'
import user from './moudle/user'
import car from './moudle/car'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user,
    car
  }
})
