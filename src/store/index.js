import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
  },
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts;
    },
  },
  actions: {
    async fetchPosts(ctx) {
      const resp = await fetch("http://jsonplaceholder.typicode.com/posts?_limit=5");
      const posts = await resp.json();
      
      ctx.commit("updatePosts", posts);
    },
  },
  getters: {
    getAllPosts(state) {
      return state.posts;
    },
  },
  modules: {
  }
})
