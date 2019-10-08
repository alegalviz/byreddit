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
  getters: {
    getPosts (state) {
      return state.posts
    }
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
      state.posts[postId].visited = true
    },
    deletePost(state, postId) {
      delete state.posts[postId]
      state.posts = Object.assign({}, state.posts)
    }
  },
  actions: {
    async fetchPosts ({ commit }) {
      const response = await getPosts()
      commit('setPosts', response.data.children)
      commit('setAfter', response.data.after)
      commit('setBefore', response.data.before)
    },
    markPostAsRead ({ commit }, post) {
      commit('setPostAsRead', post.id)
    },
    dismissPost ({
      commit
    }, post) {
      commit('deletePost', post.id)
    }
  },
});
