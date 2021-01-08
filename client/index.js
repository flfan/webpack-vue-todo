import Vue from 'vue'
import vueRouter from 'vue-router'
import app from './app.vue'
// import Vuex from 'vuex'
// import './assets/images/test.png'
// import './assets/styles/test.css'
// import './assets/styles/test.styl'
import './assets/styles/global.styl'
import createRouter from './config/router'
// import createstore from './store/store'

Vue.use(vueRouter)
// Vue.use(Vuex)

const router = createRouter()
// const store = createstore()

// store.registerModule('c', { // 注册模块
//   state: {
//     textC: 'cModule'
//   }
// })

// store.unregisterModule('c')
// store.watch(state => state.count, newcount => console.log(newcount))
// // vuex store plugins
// store.subscribe((mutation, state) => { // mutations 被调用时 执行
//   console.log(mutation.payload)
//   console.log(mutation.type)
// })
// store.subscribeAction((action, state) => { // actions 被调用时 执行
//   console.log(action.payload)
//   console.log(action.type)
// })

// router.beforeEach((to, from, next) => {
//   console.log('index beforeEach invoked', to.name, from.name)
//   // if (to.name !== 'loginexact') next({ name: 'loginexact' })
//   // if (to.name !== 'login') next({ path: '/login/123' })
//   // if (to.name === 'login') next('/login/123')
//   // if (to.name === 'login') next({ path: '/login/123' })
//   // else next()
//   next()
// })
// router.beforeResolve((to, from, next) => {
//   console.log('index beforeResolve invoked', to.name, from.name)
//   next()
// })
// router.afterEach((to, from) => {
//   console.log('index afterEach invoked', to.name, from.name)
// })
const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
  router,
  // store,
  render: (h) => h(app)
}).$mount(root)
