import Todo from '../views/todo/todo.vue'
// import Login from '../views/login/login.vue'

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app',
    component: Todo,
    // components: {
    //   // default: Todo,
    //   // roterView2: Login
    //   default: () => import('../views/todo/todo.vue')
    //   // roterView2: () => import('../views/login/login.vue')
    // },
    name: 'todo', // 路由跳转 如：<router-link :to="{name: 'todo'}">,
    meta: { // html 的 meta
      title: 'this is app page',
      description: 'hahahah'
    }
    // children: [
    //   {
    //     path: 'test',
    //     // component: Login,
    //     component: () => import('../views/login/login.vue'),
    //     name: 'test'
    //   }
    // ]
  }
  // {
  //   path: '/login/:id',
  //   // component: Login,
  //   component: () => import('../views/login/login.vue'),
  //   name: 'login',
  //   meta: {
  //     title: 'this is login'
  //   },
  //   props: true, // path 中的 id 会传递到component Login 中
  //   // props: {
  //   //   id: 3456,
  //   //   test: 'this is login'
  //   // }
  //   // props: (route) => ({
  //   //   test: route.query
  //   // }),
  //   beforeEnter (to, from, next) {
  //     console.log('routes beforeEnter invoked', to.name, from.name)
  //     next()
  //   }
  // },
  // {
  //   path: '/login/exact',
  //   // component: Login,
  //   component: () => import('../views/login/login.vue'),
  //   name: 'loginexact'
  // }
]
