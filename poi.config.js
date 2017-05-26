const path = require('path');
const pkg = require('./package.json');

module.exports = options => ({
  port: 4000,
  entry: 'src/index.js',

  html: {
    title: pkg.productName || pkg.name,
    description: pkg.description,
    // favicon: 'static/favicon.png'
  },

  autoprefixer: false,

  extendWebpack(config) {
    config.entry('client').prepend('react-hot-loader/patch')

    if (options.analyze) {
      config
        .plugin('analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    }
  }
})