import Vue from 'vue'

const app = new Vue({
  // el: '#root',
  data: {
    text: 0
  },
  beforeCreate () {
    console.log(this.$el, 'beforeCreate')
  },
  created () {
    console.log(this.$el, 'created')
  },
  beforeMount () {
    console.log(this.$el, 'beforeMount')
  },
  mounted () {
    console.log(this.$el, 'mounted')
  },
  beforeUpdate () {
    console.log(this.$el, 'beforeUpdate')
  },
  updated () {
    console.log(this.$el, 'updated')
  },
  beforeDestroy () {
    console.log(this.$el, 'beforeDestroy')
  },
  destroyed () {
    console.log(this.$el, 'destroyed')
  },
  deactivated () {
    console.log(this.$el, 'deactivated')
  },
  activated () {
    console.log(this.$el, 'activated')
  },
  render (h) { // render代替template
    throw TypeError('rnnder error')
    console.log('this is render')
    return h('div', {}, this.text)
  },
  renderError (h, err) { // render 出错时调用 只处理在本组件中的error 且正式环境不可用
    return h('div', {}, err.stack)
  },
  errorCaptured (h, err) { // render 出错时调用 处理在本组件及其子组件(冒泡)中的error 且正式环境不可用
    return h('div', {}, err.stack)
  }
  // eslint-disable-next-line no-template-curly-in-string
  // template: '<div ref="divtext">{{`${text}`}}</div>'// template会编译为render函数然后执行
})

app.$mount('#root') // 挂载之后执行beforeMount、mounted

setInterval(() => { // 数据更新时调用beforeUpdate、updated
  app.text += 1
}, 1000)

setTimeout(() => {
  app.$destroy()
}, 5000)
