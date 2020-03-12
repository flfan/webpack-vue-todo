import Vue from 'vue'
import vueRouter from 'vue-router'
import app from './app.vue'
import Vuex from 'vuex'
// import './assets/images/test.png'
// import './assets/styles/test.css'
// import './assets/styles/test.styl'
import './assets/styles/global.styl'
import createRouter from './config/router'
import createstore from './store/store'

Vue.use(vueRouter)
Vue.use(Vuex)

const router = createRouter()
const store = createstore()

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
  store,
  render: (h) => h(app)
}).$mount(root)
