'use strict'
// const path = require('path')
// const defaultSettings = require('./src/settings.js')

// function resolve(dir) {
//   return path.join(__dirname, dir)
// }

module.exports = {
  /**
   * You will need to set publicPath if you plan to deploy your site under a sub path,
   * for example GitHub Pages. If you plan to deploy your site to https://foo.github.io/bar/,
   * then publicPath should be set to "/bar/".
   * In most cases please use '/' !!!
   * Detail: https://cli.vuejs.org/config/#publicpath
   */
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  // lintOnSave: process.env.NODE_ENV === 'development',
  // productionSourceMap: false,
  devServer: {
    // port: 4000,
    // before(app) {
    //   app.get('/goods/list', (req, res, next) => {
    //     res.json(mockdata);
    //   })
    // }
    // proxy: {
    //   'v1/': {
    //     // target: "https://cupboard-admin.adonging.com/",
    //     target: 'https://cupboard-admin-test.adonging.com/',
    //     changeOrigin: true
    //   }
    // }
    // port: port,
    // open: true,
    // overlay: {
    //   warnings: false,
    //   errors: true
    // },
    // before: require('./mock/mock-server.js')
  }
}
