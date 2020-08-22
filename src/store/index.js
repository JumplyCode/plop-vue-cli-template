import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import getters from './getters'
import actions from './actions'
import mutations from './mutations'

import basic from './modules/basic'

export default new Vuex.Store({
  getters,
  actions,
  mutations,
  modules: {
    basic
  }
})
