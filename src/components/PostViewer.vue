<template>
  <v-container fluid fill-height>
    <v-layout row wrap align-center>
      <v-flex xs12>
        <div class="post-viewer">
          <v-card
            class="mx-auto"
            :flat="flat"
            :loading="loading"
            :height="height"
            v-if="post"
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
      </v-flex>
    </v-layout>
  </v-container>
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
.post-viewer {
  margin: 15px 30px;
}
.v-card {
  padding: 30px 5px;
  margin: 30px;
}
</style>