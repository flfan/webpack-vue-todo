import Vue from 'vue'

const app = new Vue({
  // el: '#root',
  data: {
    text: 0,
    obj: {}
  },
  // watch: { // 组件销毁时销毁
  //   text (n, o) {
  //     console.log(n, 0)
  //   }
  // },
  // eslint-disable-next-line no-template-curly-in-string
  template: '<div ref="divtext">{{`${text} ${obj.a}`}}</div>'
})

app.$mount('#root') // 相当于 el: '#root'

setInterval(() => {
  // app.text += 1 等价于 app.$data.text += 1
  // app.$options.data().text += 2 // 可行

  // app.text += 1 // text变化会使组件刷新
}, 1000)

let i = 0
setInterval(() => {
  i++
  // app.obj.a = i // 因为obj.a没有在组件注册,组件不监听obj.a 的变化, 但obj.a随组件刷新
  // app.$forceUpdate() // 强制组件刷新，影响性能

  app.$set(app.obj, 'a', i) // 这样组件会监听obj.a 的变化
}, 1000)

// console.log(app)
// console.log(app.$options)
// console.log(app.$data)
// console.log(app.$options.data)
// console.log(app.$el)

// console.log(app.$options.render)
// app.$options.render = (h) => {
//   console.log(h)
//   return h('div', {}, 'new render')
// }

// console.log(app.$root)
// console.log(app.$root === app) // true
// console.log(app.$children)

// console.log(app.$slots)
// console.log(app.$scopedSlots)
// console.log(app.$refs)
// console.log(app.$isServer)

// const unwatch = app.$watch('text', (newvalue, oldvalue) => {
//   console.log(newvalue, oldvalue)
// })
// setTimeout(() => {
//   unwatch() // 销毁watch
// }, 5000)

// app.$on('test', (a, b) => {
//   console.log('$on', a, b)
// })
// app.$once('test', (a, b) => {
//   console.log('$once', a, b)
// })
// setInterval(() => {
//   app.$emit('test', 1, 3)
// }, 1000)

// app.$nextTick()
