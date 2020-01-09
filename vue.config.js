const isProduction=process.env.NODE_ENV!=='development';
const path=require('path');
function resolve (dir){
  return path.join(__dirname, '.', dir)
}
module.exports={
  chainWebpack: config => {

  },
  // 代理
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:7001',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },

  css: {
    extract: !!isProduction,
    sourceMap: false,
    loaderOptions: {
      scss: {
        prependData: '@import "~@/assets/scss/index.scss";'
      },
      // rem的全局匹配
      postcss: {
        plugins: [
          require('postcss-plugin-px2rem')({
            rootValue: 50,
            exclude: /(node_module)/,
            mediaQuery: false,
            minPixelValue: 3
          })
        ]
      }
    }
  },
  // 配置地图时引入的模块
  configureWebpack: {
    externals: {
      'AMap': 'AMap'
    }
  },
  // eslint-disable-next-line no-dupe-keys
  // 配置icon引入svg
  // eslint-disable-next-line no-dupe-keys
  chainWebpack: config => {
    config.module.rules.delete('svg')
    config.module
      .rule('svg-sprite-loader')
      .test(/\.svg$/)
      .include
      .add(resolve('src/assets/icon')) // 处理svg目录
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: '[name]'
      })
  }

}
