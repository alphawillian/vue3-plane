import { createStore } from 'vuex'

export default createStore({
  // 定义所需要的状态
  state: {
    list: [
      {
        title: '吃饭',
        complete: false
      }, {
        title: '睡觉',
        complete: false
      }, {
        title: '写代码',
        complete: true
      }
    ]
  },
  // 同步修改state 都是方法
  // 第一个参数都是state 第二个参数都是需要修改的值
  mutations: {
    addTodo(state, payload) {
      state.list.push(payload)
    },
    delTodo(state, payload) {
      state.list.splice(payload, 1)
    },
    clear(state, payload) {
      state.list = payload
    }
  },
  // 异步提交mutation
  // 第一个参数都是store 第二个参数时修改的值
  actions: {
    asyncSetName(store, params) {
      setTimeout(() => {
        // commit是提交mutation 调用mutation的方法
        // 第一个参数mutation里的方法名，第二个参数是修改的值
        store.commit('setName', params)
      }, 2000)
    }
  },
  // 模块化的
  modules: {
  }
})
