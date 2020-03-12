export default { // 异步修改state
  updataCountAsync (store, data) {
    setTimeout(() => {
      store.state.first = data.num
    }, data.time)
  }
}
