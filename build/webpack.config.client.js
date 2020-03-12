const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.config.base.js')
const stylusOneOf = require('./stylus-oneOf.config')

const isDev = process.env.NODE_ENV === 'development'

const defaultPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: isDev ? '"development"' : '"production"'
    }
  }),
  new HtmlPlugin()]

let config
const devServer = {
  port: 8080,
  host: '0.0.0.0',
  // host: 'localhost',
  useLocalIp: true,
  overlay: {
    errors: true
  },
  historyApiFallback: {
    index: '/public/index.html'
  },
  hot: true
}

if (isDev) {
  config = webpackMerge(baseConfig, {
    devtool: '#cheap-module-eval-source-map', // webpack4可以不写
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
      // new webpack.NoEmitOnErrorsPlugin()
    ])
  })
} else {
  config = webpackMerge(baseConfig, {
    entry: {
      app: path.join(__dirname, '../client/index.js')
    },
    output: {
      filename: '[name].[chunkhash:8].js'
    },
    optimization: {
      runtimeChunk: true,
      splitChunks: {
        chunks: 'all'
      }
    },
    module: {
      rules: [{
        test: /\.styl(us)?$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          'stylus-loader'
        ]
      }]
    },
    plugins: [
      // new ExtractTextPlugin("styles.[md5:contenthash:hex:8].css"),
      new MiniCssExtractPlugin({
        filename: 'styles.[md5:contenthash:hex:8].css',
        chunkFilename: 'styles.[contenthash:8].css',
        ignoreOrder: false
      })
    ]
  })
}
module.exports = config
