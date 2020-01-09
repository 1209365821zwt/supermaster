// 指令的配置
// 指令是用来操作dom的
const debounfn=(func, wait=50) => {
  let timer=0;
  return function (...args){
    if (timer) clearInterval(timer)
    timer=setTimeout(() => {
      func.apply(this, args)
    }, wait)
  }
}
const debounce={
  bind () {
    console.log('aaa')
  },
  inserted (el, binding, vnode) {
    console.log(binding, vnode)
    const fnCallback=debounfn((e) => {
      console.log('防抖执行');
      vnode.context[binding.expression]=e.target.value;
    }, 200)
    el.addEventListener('input', (e) => {
      fnCallback(e)
    })
  },
  update (el, binding) {
    el.value=binding.value
  },
  componentUpdated () {},
  unbind () {}
}
export default debounce;
