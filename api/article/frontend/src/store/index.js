import Vue from 'vue'
import Vuex from 'vuex'
import {UPDATE_POSTS} from "./mutation-types"

Vue.use(Vuex)

// storeの作成
export default new Vuex.Store({
  strict: true,
  state: {
    posts: {},
  },
  // getterでstateにアクセス
  getters: {
    postList(state) {
      return state.posts
    },
  },
  // ステートを操作する処理
  mutations: { 
    [UPDATE_POSTS](state, payload) {
      state.posts = payload
    },
  },
  // actionを介してstate操作を行う
  actions: {
    [UPDATE_POSTS]({commit}, payload) {
      commit(UPDATE_POSTS, payload)
    },
  },
  modules: {}
})
