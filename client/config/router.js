import Router from 'vue-router'
import routes from './routes'

export default () => {
  return new Router({
    routes,
    // mode: 'hash',
    mode: 'history',
    base: '/base/',
    linkActiveClass: 'active',
    linkExactActiveClass: 'exactActive',
    scrollBehavior (to, from, savePosition) {
      // console.log('to:' + to.name, 'from:' + from.name)
      if (savePosition) {
        return savePosition
      } else {
        return { x: 0, y: 0 }
      }
    },
    fallback: true
    // parseQuery (query) {
    //   console.log(query)
    // },
    // stringifyQuery (obj) {
    //   console.log(obj)
    // }
  })
}
