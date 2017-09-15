// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: false,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    // `npm run build --gzip`
    productionGzip: process.env.npm_config_gzip,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report,
    imageMinOptimize:process.env.npm_config_imagemin
  },
  dev: {
    env: require('./dev.env'),
    port: 8081,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      mobile:{
        filter:'/mobile',
        target: 'http://10.250.160.64:91',
        changeOrigin: true,
        router:{
          'http://www.btiy.com':'http://localhost:8080'
        },
        onProxyRes:function(proxyRes, req, res){
          proxyRes.headers['custom-add'] = 'this is test';
        }
      },
      restapi:{
        filter:'/restapi',
        target:'http://www.yitb.com',
        changeOrigin: true,
        onProxyRes:function(proxyRes, req, res){
          proxyRes.headers['custom-add'] = 'this is test';
          proxyRes.headers['set-cookie'] = 'name=a,value=2,domain=localhost';
        },
        cookieDomainRewrite:{
          'localhost':'localhost:8080'
        }
      }

    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
