import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    result: true,
    weight: 0,
    height: 0,
    age: 0,
    prot: 0,
    carb: 0,
    fat: 0,
    cal: 0
  },
  mutations: {
    changeResult(state, payload) {
      state.result = payload
    },
    changeWeight(state, payload) {
      state.weight = payload
    },
    changeHeight(state, payload) {
      state.height = payload
    },
    changeAge(state, payload) {
      state.age = payload
    },
    protCalc(state, payload) {
      state.prot = payload
    },
    carbCalc(state, payload) {
      state.carb = payload
    },
    fatCalc(state, payload) {
      state.fat = payload
    },
    calCalc(state, payload) {
      state.cal = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
