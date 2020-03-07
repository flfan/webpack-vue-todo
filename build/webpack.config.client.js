const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpackMerge = require("webpack-merge");
const baseConfig = require("./webpack.config.base.js");

const isDev = process.env.NODE_ENV === "development";

const defaultPlugins = [
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: isDev ? '"development"' : '"production"'
    }
  }),
  new HtmlPlugin()]

let config;
const devServer = {
  port: 8000,
  host: "0.0.0.0",
  useLocalIp: true,
  overlay: {
    errors: true
  },
  hot: true
};

if (isDev) {
  config = webpackMerge(baseConfig, {
    devtool: "#cheap-module-eval-source-map",
    module: {
      rules: [
        {
          test: /\.styl/, // 加$只能处理以.styl结尾的文件，不能处理vue中的stylus
          use: [
            "style-loader",
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                sourceMap: true
              }
            },
            "stylus-loader"
          ]
        }
      ]
    },
    devServer,
    plugins: defaultPlugins.concat([
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
    ])
  });
} else {
  config = webpackMerge(baseConfig, {
    entry: {
      app: path.join(__dirname, "../client/index.js"),
      vendor: ["vue"]
    },
    output: {
      filename: "[name].[chunkhash:8].js"
    },
    optimization: {
      runtimeChunk: true,
      splitChunks: {
        cacheGroups: {
          commons: {
            name: "vendor"
          }
        }
      }
    },
    module: {
      rules: [{
        test: /\.styl/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                sourceMap: true
              }
            },
            "stylus-loader"
          ]
        })
      }]
    },
    plugins: [
      new ExtractTextPlugin("styles.[md5:contenthash:hex:8].css")
    ]
  });
}
module.exports = config;
