import Vue from 'vue'
import app from './app.vue'
// import './assets/images/test.png'
// import './assets/styles/test.css'
// import './assets/styles/test.styl'
import './assets/styles/global.styl'

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
  render: (h) => h(app)
}).$mount(root)
