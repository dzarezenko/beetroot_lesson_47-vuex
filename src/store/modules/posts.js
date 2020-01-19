export default {
  state: {
    posts: [],
  },
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts;
    },
  },
  actions: {
    async fetchPosts(ctx, limit = 3) {
      const resp = await fetch(`http://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
      const posts = await resp.json();
      
      ctx.commit("updatePosts", posts);
    },
  },
  getters: {
    getAllPosts(state) {
      return state.posts;
    },
    getPostsCount(state) {
      return state.posts.length;
    }
  },
}
