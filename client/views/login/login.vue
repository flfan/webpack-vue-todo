<template>
  <div>login page</div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['id', 'test'],
  mounted () {
    // console.log(this.test, this.id)
    // console.log(this.$route)
  },
  beforeRouteEnter (to, from, next) {
    console.log('component beforeRouteEnter invoked', to.name, from.name)
    next(vm => {
      console.log('component vm.id:' + vm.id)
    })
  },
  beforeRouteLeave (to, from, next) {
    console.log('component beforeRouteLeave invoked', to.name, from.name)
    // if (global.confirm('you will leave this page ,are you sure?')) {
    //   next()
    // }
    next()
  },
  beforeRouteUpdate (to, from, next) {
    console.log('component beforeRouteUpdate invoked', to.name, from.name)
    next()
  }
}
</script>

<style lang="stylus" scoped>
  div{
    font-size: 40px;
    font-weight: 400;
    text-align center
  }
</style>
