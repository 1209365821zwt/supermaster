const files=require.context(
  '@/directives',
  false,
  /^\.\/(\w*)+\.js$/
);
console.log(files.keys())
export default (Vue) => {
  files.keys().forEach(path => {
    const name=path.replace(/(\.\/)(\w*)(\.js)/, '$2');
    console.log(name)
    if (name!=='index'){
      Vue.directive(name, files(path).default)
    }
  })
}
