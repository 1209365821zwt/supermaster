import cookie from '../../until/cookie'
import api from '../../until/http'
import storage from '../../until/storage'
const initState ={
  info: {},
  token: cookie.getItem('token') || '',
  location: storage.getItem('location') || {}
}
export default {
  namespaced: true,
  state: initState,
  mutations: {
    setToken (state){
      state.token=cookie.getItem('token')
    },
    setUser (state, info){
      state.info=info
    },
    setALocation (state, location){
      storage.setItem('location', location, {
        expires: 60 * 1000 *60 *24
      })
      state.location=location
    }
  },
  actions: {
    // 由于这里没有组件实例
    async login ({ dispatch, commit }, params){
      await api.user.login(params);
      commit('setToken')
      await dispatch('info')
    },
    async info ({ dispatch, commit }){
      const res=await api.user.info();
      await dispatch('car/fetchCarlist', null, { root: true })
      commit('setUser', res.data)
    }
  }
}
