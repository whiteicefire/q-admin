import Vue from 'vue'
import Vuex from 'vuex'
import showcase from './showcase'
import menurouter from './menurouter'
import tabrouter from './tabrouter'


Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    // 然后我们引用它
    showcase,
    menurouter,
    tabrouter
  }
})

// 如果我们需要一些HMR魔术，我们会处理
// 下面的热点更新。 注意我们实现这个
// 用“process.env.DEV”代码 - 所以这不会
// 进入我们的生产版本（也不应该）。
if (process.env.DEV && module.hot) {
  module.hot.accept(['./showcase'], () => {
    const newShowcase = require('./showcase').default
    store.hotUpdate({ modules: { showcase: newTabroutes } })
  })
}

export default store