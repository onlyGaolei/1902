import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    menus:[]
  },
  mutations: {
    get_token(state, val) {
      state.token = val
    },
    get_menus(state, val) {
      state.menus = val
    }
  },
  actions: {
  },
  modules: {
  },
  namespaced: true,
  plugins: [createPersistedState({
    storage: window.sessionStorage
  })]
})
