<template>
  <div id="app">
    <div id="cover" />
    <Header />
    <h1>{{ count }} {{ fullName }}</h1>
    <h1>{{ fullName }}</h1>
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
import {
  mapState,
  mapGetters,
  mapActions,
  mapMutations
} from 'vuex'

export default {
  components: {
    Header,
    Footer
    // Todo
  },
  computed: {
    // ...mapState(['count']),
    // ...mapState({
    //   count: 'count'
    // }),
    ...mapState({
      count: (state) => {
        return state.count
      }
    }),
    // count () {
    //   return this.$store.state.count
    // },
    // ...mapGetters(['fullName']),
    ...mapGetters({ fullName: 'fullName' })
    // fullName () {
    //   return this.$store.getters.fullName
    // }
  },
  mounted () {
    // console.log(this.$route) // 当前router-link to中的router
    // console.log(this.$store)
    let i = 1
    setInterval(() => {
      // this.$store.commit('upCountDate', i++)
      this.updata1(i++)
    }, 1000)

    // this.$store.dispatch('updataCountAsync', { num: 'type', time: 5000 })
    this.updataCountAsync({ num: 'type', time: 5000 })
  },
  methods: {
    // ...mapMutations(['upCountDate']),
    ...mapMutations({ updata1: 'upCountDate' }),
    ...mapActions(['updataCountAsync'])
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
