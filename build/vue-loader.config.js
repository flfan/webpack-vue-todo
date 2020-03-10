module.exports = (isDev ) => { // 有问题
  return {
    // preserveWhitespace: false, // 2.6已弃用
    Whitespace: 'preserve',
    extractCSS: !isDev, // 不可用
    cssModules: { // 不可用
      localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
      camelCase: true
    }
    // hotReload: isDev
  }
}
