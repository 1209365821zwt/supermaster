import axios from '../api/api'
const api={
  user: {
    carouel: () => axios.get('/carouel'),
    iconlist: () => axios.get('/iconlist'),
    sendCode: (params) => axios.post('/user/send_code', params),
    login: (params) => axios.post('/user/login', params),
    info: () => axios.get('/user/info')

  },
  address: {
    create: (params) => axios.post('/api/address', params),
    index: () => axios.get('/api/address')
  },
  home: {
    menu: () => axios.get('/api/home/menu'),
    product: (params) => axios.get('/api/home/products', params)
  },
  class: {
    product: () => axios.get('/api/classify/menu'),
    products: (params) => axios.get('/api/product/products', params)
  },
  car: {
    list: () => axios.get('/api/shopcar'),
    add: (params) => axios.post('/api/shopcar/add', params),
    delete: (params) => axios.post('/api/car/delete', params),
    addNum: (params) => axios.post('/api/car/addNum', params)
  }
}
export default api
