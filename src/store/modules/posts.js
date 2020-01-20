export default {
  state: {
    posts: [],
  },
  mutations: {
    updatePost(state, posts) {
      state.posts = posts;
    },

    addPost(state, post) {
      state.posts.unshift(post);
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

    getPostsCount(state, getters) {
      return getters.getValidPosts.length;
    },

    getValidPosts(state) {
      return state.posts.filter(p => {
        return p.title && p.body;
      });
    },
  },
}
