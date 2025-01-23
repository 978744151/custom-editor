const webpack = require('webpack')
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  transpileDependencies: ['avue-plugin-ueditor'],

  productionSourceMap: false,

  configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  },

  chainWebpack: (config) => {
    config.externals({
      'vue': 'Vue',
    })
    config.resolve.alias
      .set('@', resolve('packages'))
      .set('@components', resolve('packages/components'))
      .set('@utils', resolve('packages/utils'))
      .set('@mixins', resolve('packages/mixins'))

    const output = config.output.store.get('path')
    if (output.includes('lib')) config.plugin('optimize')
      .use(webpack.optimize.LimitChunkCountPlugin, [{
        maxChunks: 1
      }])
  },

  devServer: {
    open: true,
    proxy: {
      '/api': { // 这里的 /api 是匹配的前缀
        target: 'https://api.avuejs.com', // 后端服务的实际地址
        changeOrigin: true, // 是否改变源地址
        pathRewrite: {
          '^/api': '' // 重写路径，去掉前缀 /api
        }
      }
    }

  },

  css: {
    extract: false
  }
}
