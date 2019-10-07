import Vue from 'vue';
import Vuex from 'vuex';
import getPosts from './services/reddit.service.js'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
    after: "",
    before: ""
  },
  mutations: {
    setPosts (state, posts) {
      state.posts = state.posts.concat(posts)
    },
    setAfter (state, after) {
      state.after = after
    },
    setBefore (state, before) {
      state.before = before
    }
  },
  actions: {
    async fetchPosts ({ commit }) {
      const response = await getPosts()
      commit('setPosts', response.data.children)
      commit('setAfter', response.data.after)
      commit('setBefore', response.data.before)
    }
  },
});
