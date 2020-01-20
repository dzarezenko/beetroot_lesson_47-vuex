<template>
  <form @submit.prevent="submit">
    <input type="text" v-model="title" />
    <input type="text" v-model="body" />
    <button type="submit">Add Post</button>
  </form>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      title: "",
      body: "",
    }
  },
  methods: {
    ...mapMutations({
      addPost: "addPost",
    }),
    submit() {
      //alert(`title: ${this.title}, body: ${this.body}`);
      this.addPost({
        title: this.title,
        body: this.body,
        id: Date.now(),
      });

      this.title = this.body = "";
    }
  }
}
</script>
