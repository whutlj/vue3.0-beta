const merge = require('webpack-merge');
const path = require('path');
function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  devServer: {
    port: 8888,
    proxy: {
      '/v2': {
        target: 'https://api.douban.com',
        changeOrigin: true,
        pathRewrite: {
          '^/v2': '/v2'
        }
      },
      '/api': {
        target: 'https://www.v2ex.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  },
  chainWebpack: (config) => {
    config.module
      .rule('compile')
      .test(/\.js$/)
      .include.add(resolve('node_modules/vue-echarts'))
      .add(resolve('node_modules/resize-detector'))
      .end();
  },
  lintOnSave: false
};
