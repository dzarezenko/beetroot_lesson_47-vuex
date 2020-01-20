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
    async fetchPosts(ctx) {
      const resp = await fetch("http://jsonplaceholder.typicode.com/posts?_limit=5");
      const posts = await resp.json();
      //console.log(posts);

      ctx.commit("updatePost", posts);
    }
  },
  getters: {
    getAllPosts(state) {
      return state.posts;
    },
  },
}
