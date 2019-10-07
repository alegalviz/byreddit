<template>
  <v-app id="home">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <Card
        v-for="post in getPosts"
        :post="post"
        v-bind:key="post.id"
        @select-post="selectPost(post)"
      />
      <v-btn class="dismiss-all" text @click="dismissAll()">Dismiss All</v-btn>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Reader for Reddit</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container
        class="fill-height"
      >
        <v-row
          align="start"
          justify="start"
          cols="12"
        >
          <PostViewer
            :post="currentPost"
          />
        </v-row>
      </v-container>
    </v-content>
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Card from '../components/Card'
import PostViewer from '../components/PostViewer'
export default {
  components: {
    Card,
    PostViewer
  },
  data: () => ({
    drawer: null,
    currentPost: {}
  }),
  computed: {
    ...mapState({
      getPosts: (state) => state.posts
    })
  },
  methods: {
    ...mapActions(['fetchPosts']),
    dismissAll () {
      return false
    },
    selectPost (post) {
      this.currentPost = post
    }
  },
  async mounted () {
    await this.fetchPosts()
  }
};
</script>
