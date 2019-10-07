<template>
  <div class="card">
    <v-card
    max-width="344"
    class="mx-auto"
    hover="true"
  >
    <h5>{{ post.title }}</h5>
    <v-card-actions>
      <v-btn x-small="true" color="blue" text>Show the preview</v-btn>
      <v-btn x-small="true" text>Dismiss</v-btn>
    </v-card-actions>
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
  }
}
</script>
<style scoped>
.v-card {
  padding: 30px 5px;
  margin-bottom: 15px;
}
</style>