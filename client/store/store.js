import Vuex from 'vuex'
import defaultState from './state'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

export default () => {
  const store = new Vuex.Store({
    strict: true,
    state: defaultState,
    mutations,
    getters,
    actions,
    modules: {
      a: {
        namespaced: true,
        state: {
          text: 'a1'
        },
        mutations: {
          updateText (state, data) {
            state.text += data
          }
        },
        getters: {
          getterText (state, getters, rootState) {
            // return state.text + rootState.b.text
            return state.text + rootState.count
          }
        },
        actions: {
          addText ({ state, commit, rootState }) {
            commit('updateText', rootState.count + state.text)
          },
          addText2 (ctx) {
            ctx.commit('upCountDate', ctx.rootState.count + ctx.state.text, { root: true }) // root true 调用全局mutations
          }
        },
        modules: { // 可以无限添加模块
          aa: {
            state: {
              textAA: 'aaaaaa'
            }
          }
        }
      },
      b: {
        state: {
          text: 'b1'
        },
        mutations: {
          updateText (state, data) {
            state.text += data
          }
        },
        getters: {
          getterText (state, getters, rootState) {
            return state.text + rootState.a.text
          }
        }
      }
    }
  })

  if (module.hot) { // veux热更新
    module.hot.accept([
      './state',
      './mutations',
      './getters',
      './actions'
    ], () => {
      const newState = require('./state').default
      const newMutations = require('./mutations').default
      const newGetters = require('./getters').default
      const newActions = require('./actions').default

      store.hotUpdate({
        state: newState,
        mutations: newMutations,
        getters: newGetters,
        actions: newActions
      })
    })
  }
  return store
}
