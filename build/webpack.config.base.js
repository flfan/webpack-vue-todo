const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

config = {
  mode: "none",
  target: "web",
  entry: path.join(__dirname, "../client/index.js"),
  output: {
    filename: "bundle[hash:8].js",
    path: path.join(__dirname, "../dist")
  },
  module: {
    rules: [
      {
        test: /.vue$/,
        use: "vue-loader"
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.jsx$/,
        loader: "babel-loader"
      },
      // {
      //   test: /\.css$/,
      //   use: ["style-loader", "css-loader"]
      // },
      {
        test: /\.(gif|png|jpg|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 1024,
              name: "resources/[path][name].[hash:8].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}

module.exports = config;
