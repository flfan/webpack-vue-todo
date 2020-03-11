const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.config.base.js')
const stylusOneOf = require('./stylus-oneOf.config')

const defaultPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"development"'
    }
  }),
  new HtmlPlugin({
    template: path.join(__dirname, './template.html')
  })]

const devServer = {
  port: 8080,
  host: '0.0.0.0',
  useLocalIp: true,
  overlay: {
    errors: true
  },
  hot: true
}

const config = webpackMerge(baseConfig, {
  resolve: {
    alias: {
      vue: path.join(__dirname, '../node_modules/vue/dist/vue.esm.js')
    }
  },
  entry: path.join(__dirname, '../practice/index.js'),
  module: {
    rules: [
      {
        test: /\.styl(us)?$/, // 加$只能处理以.styl结尾的文件，不能处理vue中的stylus
        oneOf: stylusOneOf
      }
    ]
  },
  devServer,
  plugins: defaultPlugins.concat([
    new webpack.HotModuleReplacementPlugin()
  ])
})
module.exports = config
