var path = require('path');
var cooking = require('cooking');

cooking.set({
  entry: {
    app: ['babel-polyfill', './src/app.js']
  },
  dist: './dist',
  template: './src/index.html',

  devServer: {
    port: 8080,
    publicPath: '/'
  },

  // production
  clean: true,
  hash: true,
  chunk: 'vendor',
  publicPath: '/',
  assetsPath: 'static',
  sourceMap: true,
  extractCSS: true,
  urlLoaderLimit: 10000,

  extends: ['react', 'postcss'],
});

cooking.add('resolve.root', [
  path.resolve('./src'),
])

const cssModulesLoader = [
  'css?sourceMap&-minimize',
  'modules',
  'importLoaders=1',
  'localIdentName=[name]__[local]___[hash:base64:5]',
].join('&')

cooking.add('loader.sass', {
  test: /\.scss$/,
  loader: `style!${cssModulesLoader}!postcss!sass`,
})

module.exports = cooking.resolve();
