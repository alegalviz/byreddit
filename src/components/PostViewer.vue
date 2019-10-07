<template>
  <div class="post-viewer">
    <v-card
      class="mx-auto"
      :flat="flat"
      :loading="loading"
      :width="width"
      :height="height"
    >
      <img
        v-if="post.thumbnail"
        class="white--text"
        height="200px"
        :src="`${post.thumbnail}?id=${post.id}`"
      >
      <v-card-title>{{ post.title }}</v-card-title>

      <v-card-text>Link: <a :href="`${baseImagURL}${post.permalink}`" target="_blank">{{ post.title }}</a></v-card-text>
      <v-card-text>Author: {{ post.author }}</v-card-text>
    </v-card>
  </div>
</template>
<script>
export default {
  props:{
    post: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    flat: false,
    media: true,
    loading: false,
    actions: true,
    width: 800,
    height: 'auto',
  }),
  computed: {
    postRead () {
      return this.post.read ? 'read' : ''
    },
    baseImagURL () {
      return 'https://www.reddit.com'
    }
  }
}
</script>
<style scoped>
.v-card {
  padding: 30px 5px;
  margin-bottom: 15px;
}
.pill {
  background: #3f51b5;
  display: block;
  position: absolute;
  right: 5px;
  top: 5px;
  border-radius: 50%;
  width: 10px;
  height: 10px;
}
.read {
  background: lightgrey;
}
</style>