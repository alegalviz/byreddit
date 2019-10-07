<template>
  <div class="card">
    <v-card
    max-width="344"
    class="mx-auto"
    :hover="true"
  >
    <span :class="`pill ${postRead}`"></span>
    <h5>{{ post.title }}</h5>
    <v-card-actions>
      <v-btn :x-small="true" color="blue" text>Show the preview</v-btn>
      <v-btn :x-small="true" text>Dismiss</v-btn>
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
  },
  computed: {
    postRead () {
      return this.post.read ? 'read' : ''
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