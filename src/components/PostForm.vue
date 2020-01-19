<template>
  <form @submit.prevent="submit">
    <input type="text" placeholder="title" v-model="title" />
    <input type="text" placeholder="body" v-model="body" />
    <button type="submit">Create Post</button>
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
    ...mapMutations([ "createPost" ]),
    submit() {
      this.createPost({
        title: this.title,
        body: this.body,
        id: Date.now(),
      });
    },
  },
}
</script>
