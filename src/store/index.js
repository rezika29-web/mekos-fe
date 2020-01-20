import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    header:false
  },
  mutations: {
    setHeader: (state,value) => {
      state.header=value
    }
  },
  getters:{
    getHeader:  state => {
      return state.header
    }
  },
  actions: {

  }
})
