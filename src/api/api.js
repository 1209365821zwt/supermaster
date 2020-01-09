// axios拦截
import axios from 'axios'
const instance = axios.create({
  baseURL: '/api'
});
// 接口拦截
// instance.interceptors.request.use(function (config) {
//   // Do something before request is sent
//   return config;
// }, function (error) {
//   // Do something with request error
//   return Promise.reject(error);
// });

// Add a response interceptor
instance.interceptors.response.use(function (response) {
  // Do something with response data
  return response.data;
}, function (error) {
  // Do something with response error
  console.log(error.response)
  const status=error.response.status;
  switch (status){
    case 401 :
      alert('用户过期');
      break;
    case 422 :
      // eslint-disable-next-line no-undef
      // alert(response.data.message);
      break;
    default:
      alert('稍后再试')
  }
  return Promise.reject(error);
});
export default {
  get: (url, data) => instance.get(url, { params: data }),
  post: (url, data) => instance.post(url, data)
}
