<template>
  <div id="app">
    <h2>Posts count: {{ postsCount }}</h2>
    <div class="post" v-for="post in allPosts" :key="post.id">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters({
      allPosts: "getAllPosts",
      postsCount: "getPostsCount",
    }),
  },
  methods: {
    ...mapActions({
      fetchPosts: "fetchPosts",
    }),
  },
  async mounted() {
    this.fetchPosts(10);
  }
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
