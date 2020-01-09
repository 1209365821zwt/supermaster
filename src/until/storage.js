const setItem=(key, value, options) => {
  const val=typeof value==='object' ? JSON.stringify(value) :value;
  if (options.expires){
    const data=+new Date()
    window.localStorage.setItem(key, JSON.stringify(
      {
        _expires: data+options.expires,
        value
      }
    ))
  } else {
    window.localStorage.setItem(key, val)
  }
}
const getItem=(key) => {
  const value=window.localStorage.getItem(key);
  if (value && (value.indexOf('[')===0 || value.indexOf('{')===0)){
    const res = JSON.parse(value)
    if (res._expires){
      if ((+new Date())<= res._expires){
        return res.value
      } else {
        window.localStorage.removeItem(key)
      }
    } else {
      return res
    }
  }
  return value
}
export default {
  setItem,
  getItem
}
