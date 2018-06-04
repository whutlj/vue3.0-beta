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
  lintOnSave: false
};
