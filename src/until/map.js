import AMap from 'AMap'

const mapLocation=(options={}) => {
  return new Promise((resolve, reject) => {
    AMap.plugin('AMap.Geolocation', function () {
      var geolocation = new AMap.Geolocation({
        // 是否使用高精度定位，默认：true
        enableHighAccuracy: true,
        // 设置定位超时时间，默认：无穷大
        timeout: 20000,
        // // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
        // buttonOffset: new AMap.Pixel(10, 20),
        // //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        // zoomToAccuracy: true,
        // //  定位按钮的排放位置,  RB表示右下
        // buttonPosition: 'RB'
        ...options
      })

      geolocation.getCurrentPosition()
      AMap.event.addListener(geolocation, 'complete', resolve)
      AMap.event.addListener(geolocation, 'error', reject)
    })
  })
}
const searchLocation=(keyword, city='全国') => {
  return new Promise((resolve, reject) => {
    AMap.plugin('AMap.Autocomplete', function (){
    // 实例化Autocomplete
      var autoOptions = {
      // city 限定城市，默认全国
        city: city
      }
      var autoComplete= new AMap.Autocomplete(autoOptions);
      autoComplete.search(keyword, function (status, result) {
      // 搜索成功时，result即是对应的匹配数据
        resolve(result)
      })
    })
  })
}
export default {
  mapLocation,
  searchLocation
}
