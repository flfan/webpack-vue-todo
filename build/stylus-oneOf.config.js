module.exports = [
  {
    resourceQuery: /module/,
    use: [
      'vue-style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: {
            localIdentName: '[path]-[name]-[hash:base64:5]'
          },
          localsConvention: 'camelCase'
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true
        }
      },
      'stylus-loader'
    ]
  },
  {
    resourceQuery: /scoped/,
    use: [
      'vue-style-loader',
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true
        }
      },
      'stylus-loader'
    ]
  },
  {
    use: [
      'vue-style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: {
            localIdentName: '[path]-[name]-[hash:base64:5]'
          },
          localsConvention: 'camelCase'
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true
        }
      },
      'stylus-loader'
    ]
  }
]
