const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development'

const config = {
  mode: 'none',
  target: 'web',
  entry: path.join(__dirname, 'client/index.js'),
  output: {
    filename: 'bundle[hash:8].js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(gif|png|jpg|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              name: '[name]-aa.[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isDev ? '"development"' : '"production"'
      }
    }),
    new HtmlPlugin()
  ]
}

if (isDev) {
  config.module.rules.push({
    test: /\.styl/, // 加$只能处理以.styl结尾的文件，不能处理vue中的stylus
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true
        }
      },
      'stylus-loader'
    ]
  })
  config.devtool = '#cheap-module-eval-source-map'
  config.devServer = {
    port: 8000,
    host: '0.0.0.0',
    useLocalIp: true,
    overlay: {
      errors: true
    },
    hot: true
  }
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  )
} else {
  config.entry = {
    app: path.join(__dirname, 'client/index.js'),
    vendor: ['vue']
  }
  config.output.filename = '[name].[chunkhash:8].js'
  config.optimization = {
    runtimeChunk: true,
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'vendor'

          // chunks: "initial",
          // minChunks: 2
        }
      }
    }
  }

  config.module.rules.push({
    test: /\.styl/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true
          }
        },
        'stylus-loader'
      ]
    })
  })
  config.plugins.push(
    new ExtractTextPlugin('styles.[md5:contenthash:hex:8].css')
    // new webpack.optimize.CommonsChunkPlugin({  // 已弃用
    //   name: "vendor"
    // })
  )
}
module.exports = config
