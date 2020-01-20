<template>
  <div id="app">
    <h2>Post Counter: {{ postsCount }}</h2>
    <div class="post" v-for="(post, index) in posts" :key="post.id">
      <h3>{{ index + 1 }}. {{ post.title }}</h3>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters({
      posts: "getAllPosts",
      postsCount: "getPostsCount",
    }),

    // ...
  },
  methods: {
    ...mapActions({
      fetchPosts: "fetchPosts",
    }),
  },
  mounted() {
    this.fetchPosts(7);
  },
}
</script>

<style scoped>
.post {
  display: block;
  width: 300px;
  margin: 10px auto;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 10px;
}
</style>
