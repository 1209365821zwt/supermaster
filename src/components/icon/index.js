// webpack需要文件有依赖关系，现在引入icon图片，让其有依关系
import icon from './icon'
// 单独去注册,把所有的组件引入调用去执行，这样才有依赖关系；
// 目的是读取一下文件，webpack才能打包
export default {
  install (Vue){
    const requireAll=(requireContext) => {
      console.log(requireContext, requireContext.keys())
      return requireContext.keys().map((name) => {
        return requireContext(name)// 读取某个文件
      })
    }
    const req=require.context('@/assets/icon', false, /\.svg$/);// 返回的是一个对象
    requireAll(req)
    Vue.component('SIcon', icon)
  }
}
