<template>
  <div id="app">
    <div id="cover" />
    <Header />
    <router-link to="/app">
      app
    </router-link>
    <router-link to="/login/1235">
      login
    </router-link>
    <router-link to="/login/exact">
      loginexact
    </router-link>
    <transition name="fade">
      <router-view />
    </transition>
    <!-- <Todo /> -->
    <Footer />
    <router-view name="roterView2" />
  </div>
</template>

<script>
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
// import Todo from './views/todo/todo.vue'

export default {
  components: {
    Header,
    Footer
    // Todo
  },
  mounted () {
    // console.log(this.$route) // 当前router-link to中的router
  }
}
</script>

<style lang="stylus" scoped>
  font-size 40px
  #app
    position absolute
    left 0
    right 0
    top 0
    bottom 0
    #cover
        position absolute
        left 0
        right 0
        top 0
        bottom 0
        background-color #999
        opacity 0.2
        z-index -1
</style>
