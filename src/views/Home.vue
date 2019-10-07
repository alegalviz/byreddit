<template>
  <v-app id="home">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <Card v-for="post in getPosts" :post="post" v-bind:key="post.id"></Card>
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
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col class="text-center">
            
          </v-col>
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
export default {
  components: {
    Card
  },
  data: () => ({
    drawer: null
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
    }
  },
  async mounted () {
    await this.fetchPosts()
  }
};
</script>
