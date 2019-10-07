<template>
  <div class="card">
    <v-card
    max-width="344"
    class="mx-auto"
    :hover="true"
    @click.stop="$emit('select-post', post)"
  >
    <span :class="`pill ${postRead}`"></span>
    <h5>{{ post.title }}</h5>
    <v-card-text>
      Comments: {{ post.num_comments }} comments <br />
      Author: <strong>{{ post.author }}</strong> <br />
      {{ formattedDate }}
    </v-card-text>
    <v-card-actions>
      <v-btn :x-small="true" color="blue" text>Show the preview</v-btn>
      <v-btn :x-small="true" text>Dismiss</v-btn>
    </v-card-actions>
  </v-card>
  </div>
</template>
<script>
import { format } from 'timeago.js'
export default {
  props:{
    post: {
      type: Object,
      required: true
    }
  },
  computed: {
    postRead () {
      return this.post.visited ? 'read' : ''
    },
    formattedDate () {
      return format(new Date(this.post.created_utc * 1000))
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