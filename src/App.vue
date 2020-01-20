<template>
  <div id="app">
    <div class="post" v-for="post in posts" :key="post.id">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
    }
  },
  async mounted() {
    const resp = await fetch("http://jsonplaceholder.typicode.com/posts?_limit=5");
    const posts = await resp.json();
    //console.log(posts);

    this.posts = posts;
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
