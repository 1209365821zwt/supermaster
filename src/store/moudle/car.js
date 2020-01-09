import api from '../../until/http'
const initState ={
  carlist: [],
  allFlag: false,
  allPrice: 0,
  orderList: []
}
const all=(arr) => {
  return arr.every(item => item.active)
}
const sum=(sum) => {
  return sum.reduce((prev, next) => {
    return prev+(next.active ? next.price*next.num :0)
  }, 0)
}
export default {
  namespaced: true,
  state: initState,
  mutations: {
    setCarList (state, carlist){
      state.carlist=carlist
    },
    setOrderlist (state, params){
      state.orderList.push(params);
      console.log(state.orderList)
    },
    setActive (state, params){
      const { ind, flag }=params
      state.carlist[ind].active=flag;
      state.allFlag= all(state.carlist);
      state.allPrice=sum(state.carlist)
    },
    setAllflag (state, params){
      state.allFlag=params;
      // eslint-disable-next-line no-return-assign
      state.carlist.forEach(item => item.active = state.allFlag);
      state.allPrice=sum(state.carlist)
    },
    setNum (state, params){
      console.log(state.carlist)
      state.allPrice=sum(state.carlist)
    }

  },
  actions: {
    // 由于这里没有组件实例
    async fetchCarlist ({ dispatch, commit }, params){
      const res= await api.car.list();
      console.log(res)
      commit('setCarList', res.data)
    },
    async addCar ({ dispatch, commit }, params){
      await api.car.add(params);
      // 添加完后需要重新获取列表
      dispatch('fetchCarlist')
    }
  }
}
