<template>
  <div id="home">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <transition-group name="list">
        <Card
          v-for="post in getPosts"
          :post="post"
          v-bind:key="post.id"
          @select-post="selectPost(post)"
          @dismiss-post="dismissPost(post)"
        />
      </transition-group>
      <div>
        <v-btn class="accent get-next" text @click="nextPosts()">More posts</v-btn>
      </div>
      <v-btn color="red" class="dismiss-all" text @click="dismissAll()">Dismiss All</v-btn>
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
            v-if="currentPost"
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
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Card from '../components/Card'
import PostViewer from '../components/PostViewer'
export default {
  components: {
    Card,
    PostViewer
  },
  data: () => ({
    drawer: null,
    currentPost: null
  }),
  computed: {
    ...mapGetters(['getPosts'])
  },
  methods: {
    ...mapActions(['fetchPosts', 'markPostAsRead', 'dismissPost', 'dismissAll', 'nextPosts']),
    selectPost (post) {
      this.markPostAsRead(post)
      this.currentPost = post
    }
  },
  async mounted () {
    await this.fetchPosts()
  }
};
</script>
<style scoped>
.dismiss-all {
  position: fixed;
  bottom: 0;
  background: white;
  text-align: center;
  width: 100%;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.get-next {
  margin-bottom: 40px;
  width: 100%;
}
</style>