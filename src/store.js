import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    packagesData: [],
    dialogVisible: false,
    formData: {}
  },
  getters: {
    packagesData: (state) => {
      return state.packagesData;
    },
    dialogVisible: (state) => {
      return state.dialogVisible;
    },
    formData: (state) => {
      return state.formData;
    }
  },
  mutations: {
    setPackagesData: (state, data) => {
      state.packagesData = data;
    },
    setDialogVisible: (state, dialogVisible) => {
      state.dialogVisible = dialogVisible;
    },
    setFormData: (state, data) => {
      state.formData = data;
    }
  },
  actions: {

  }
})
