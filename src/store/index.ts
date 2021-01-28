import { createStore } from 'vuex'

export default createStore({
  state: {
    loading: false
  },
  mutations: {
    setLoader (state) {
      state.loading = true
    },
    clearLoader (state) {
      state.loading = false
    }
  }
})
