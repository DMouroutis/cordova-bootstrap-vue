import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import axios from '@/axios/axios'

Vue.use(Vuex)

const DefaultState = {
  isAuthenticated: true, // Just a sample for navigation guard
  language: 'en'
}

const actions = {
  authenticate: async ({ commit }) => {
    const api_key = await axios.get('user/me')

    axios.defaults.headers.common = {
      'X-API-Key': api_key
    }

    commit('isAuthenticated', true)
  }
}

const getters = {
  isAuthenticated(state) {
    return state.isAuthenticated
  },

  language(state) {
    return state.language
  }
}

const mutations = {
  isAuthenticated(state, payload) {
    state.isAuthenticated = payload
  },

  language(state, language) {
    state.language = language
  }
}

const store = new Vuex.Store({
  state: DefaultState,
  actions,
  getters,
  mutations,
  plugins: [createPersistedState()]
})

export default store
