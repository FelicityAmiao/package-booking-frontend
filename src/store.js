import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    packagesData: []
  },
  getters: {
    packagesData: (state) => {
      return state.packagesData;
    }
  },
  mutations: {
    setPackagesData: (state, data) => {
      state.packagesData = data;
    }
  },
  actions: {

  }
})
