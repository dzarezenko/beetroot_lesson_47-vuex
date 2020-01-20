export default {
  state: {
    posts: [],
  },
  mutations: {
    updatePost(state, posts) {
      state.posts = posts;
    },
  },
  actions: {
    async fetchPosts(ctx, limit = 5) {
      const resp = await fetch(`http://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
      const posts = await resp.json();
      //console.log(posts);

      ctx.commit("updatePost", posts);
    }
  },
  getters: {
    getAllPosts(state) {
      return state.posts;
    },

    getPostsCount(state) {
      return state.posts.length;
    },
  },
}
