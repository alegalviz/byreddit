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
      const reducedPosts = posts.reduce( (acc, curr) => {
        acc[curr.data.id] = curr.data
        return acc
      }, {})
      state.posts = Object.assign(reducedPosts, state.posts)
    },
    setAfter (state, after) {
      state.after = after
    },
    setBefore (state, before) {
      state.before = before
    },
    setPostAsRead(state, postId) {
      state.posts[postId].read = true
    }
  },
  actions: {
    async fetchPosts ({ commit }) {
      const response = await getPosts()
      commit('setPosts', response.data.children)
      commit('setAfter', response.data.after)
      commit('setBefore', response.data.before)
    },
  },
});
